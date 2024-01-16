import { Injectable } from '@angular/core';

import { apiKeyList } from '../data/api-keys-list';

import { ApiKey } from '../models';


@Injectable({
    providedIn: 'root'
})
export class ApiKeyService {

    apiKeys: ApiKey[] = apiKeyList;
    
    generateApiKey(): string {
        return Math.random().toString(36).substr(2, 10);
    }

    getAllApiKeys(): ApiKey[] {
        return this.apiKeys;
    }

    addApiKey(apiKey: ApiKey): void {
        this.apiKeys.push(apiKey);
    }

    deleteApiKey(apiKeyName: string): void {
        const indexToDelete = this.apiKeys.findIndex(apiKey => apiKey.name === apiKeyName);
    
        if (indexToDelete !== -1) {
            this.apiKeys.splice(indexToDelete, 1);
            console.log(`API key '${apiKeyName}' deleted successfully.`);
        } else {
            console.log(`API key '${apiKeyName}' not found.`);
        }
    }
}
