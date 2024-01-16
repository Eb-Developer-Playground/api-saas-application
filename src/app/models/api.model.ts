export interface Api {
    id: number,
    name: string;
    icon: string;
    category: string;
    description: string;
    usageGuide: string;
    features: string[];
    pricingPlan: string;
    swaggerJsonFile?: string;
}
