import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiKeyService {
    generateApiKey(): string {
        const apiKey = Math.random().toString(36).substr(2, 10);
        return apiKey;
    }
}
