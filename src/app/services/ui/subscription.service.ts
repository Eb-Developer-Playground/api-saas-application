import { Injectable, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';

/**
 * Service for managing subscriptions and preventing memory leaks.
 *
 * @Injectable decorator allows Angular to inject dependencies into this service.
 */
@Injectable({
    providedIn: 'root',
})
export class SubscriptionService implements OnDestroy {
    /** SubSink instance for managing subscriptions. */
    private subs = new SubSink();

    /**
     * Lifecycle hook method called when the service is destroyed.
     * Unsubscribes from all subscriptions to avoid memory leaks.
     */
    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    /**
     * Adds a subscription to the SubSink, which will be automatically unsubscribed
     * when the component is destroyed.
     *
     * @param subscription - The Observable subscription to be added.
     */
    add(subscription: Observable<any>): void {
        this.subs.sink = subscription;
    }
}
