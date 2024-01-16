import { Injectable } from '@angular/core';

import { apiKeyList } from '../data/api-keys-list';

import { ApiKey } from '../models';


@Injectable({
    providedIn: 'root'
})
export class ApiKeyService {

    apiKeyList: ApiKey[] = [];
    
    generateApiKey(): string {
        return Math.random().toString(36).substr(2, 10);
    }

    getAllApiKeys(): ApiKey[] {
        return this.apiKeyList;
    }

    addApiKey(apiKey: ApiKey): void {
        this.apiKeyList.push(apiKey);
    }

    deleteApiKey(apiKeyName: string): void {
        const indexToDelete = this.apiKeyList.findIndex(apiKey => apiKey.name === apiKeyName);
    
        if (indexToDelete !== -1) {
            this.apiKeyList.splice(indexToDelete, 1);
            console.log(`API key '${apiKeyName}' deleted successfully.`);
        } else {
            console.log(`API key '${apiKeyName}' not found.`);
        }
    }
}
