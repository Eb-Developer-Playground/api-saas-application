// redoc.service.ts
import { Injectable } from '@angular/core';

// Declare Redoc as any to avoid TypeScript compilation errors
declare const Redoc: any;

/**
 * Service for initializing Redoc API documentation.
 *
 * @remarks
 * This service provides a method for initializing Redoc with a given Swagger JSON specification.
 *
 * @example
 * ```typescript
 * // Usage example in a component
 * const specUrl = 'path-to-your-swagger-json';
 * const options = { theme: { colors: { primary: { main: '#ff0000' } } } };
 * const container = document.getElementById('redoc-container');
 *
 * redocService.initDocs(specUrl, options, container);
 * ```
 *
 * @publicApi
 */
@Injectable({
    providedIn: 'root'
})
export class RedocService {
    /**
     * Initializes Redoc API documentation with the provided Swagger JSON specification.
     *
     * @param specUrl - The URL or path to the Swagger JSON specification.
     * @param options - Optional Redoc configuration options.
     * @param container - The HTML element that will contain the Redoc documentation.
     *
     * @remarks
     * This method should be called after the component is initialized, for example, in the `ngOnInit` lifecycle hook.
     *
     * @publicApi
     */
    initDocs(specUrl: string, options: any, container: HTMLElement): void {
        Redoc.init(specUrl, options, container);
    }
}
