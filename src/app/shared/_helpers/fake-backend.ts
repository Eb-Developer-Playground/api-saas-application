import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';
import { User } from '../models/user';
import { userData } from '../data/users';


const usersKey = 'users';
const storedUsersData = localStorage.getItem(usersKey);
// Get from data/users.ts 
let users= userData;



@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute(): Observable<HttpEvent<any>> {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    return next.handle(request);
            }
        }

        function authenticate(): Observable<HttpEvent<any>> {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }

        function register(): Observable<HttpEvent<any>> {
            const user = body;
            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken');
            }
            user.id = users.length ? String(Math.max(...users.map(x => +x.id)) + 1) : '1';
            users.push(user);
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }

        function getUsers(): Observable<HttpEvent<any>> {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }

        function getUserById(): Observable<HttpEvent<any>> {
            if (!isLoggedIn()) return unauthorized();
            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }

        function updateUser(): Observable<HttpEvent<any>> {
            if (!isLoggedIn()) return unauthorized();

            let params = body;
            let user = users.find(x => x.id === idFromUrl());

            if (user && params) {
                if (!params.password) {
                    delete params.password;
                }
                Object.assign(user, params);

                localStorage.setItem(usersKey, JSON.stringify(users));
                return ok();
            } else {
                // Handle the scenario where user or params is undefined/null
                return throwError({ error: { message: 'User or parameters not found' } });
            }
        }


        function deleteUser(): Observable<HttpEvent<any>> {
            if (!isLoggedIn()) return unauthorized();
            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem(usersKey, JSON.stringify(users));
            return ok();
        }

        function ok(body?: unknown): Observable<HttpEvent<any>> {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message: string): Observable<HttpEvent<any>> {
            return throwError({ error: { message } });
        }

        function unauthorized(): Observable<HttpEvent<any>> {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn(): boolean {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl(): string {
            const urlParts = url.split('/');
            return urlParts[urlParts.length - 1];
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
