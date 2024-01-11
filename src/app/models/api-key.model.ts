export interface ApiKey {
    name: string;
    secretKey: string;
    tracking: boolean;
    created: string;
    lastUsed: string | 'Never';
}