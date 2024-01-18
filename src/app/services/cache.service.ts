import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    constructor() { }

    // Get data from local storage
    get(key: string): any {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    }

    // Set data in local storage
    set(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Clear data from local storage
    clear(key: string): void {
        localStorage.removeItem(key);
    }

    // Clear all data from local storage
    clearAll(): void { 
        localStorage.clear();
    }
}
