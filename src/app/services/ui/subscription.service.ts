import { Injectable, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { Observable, SubscriptionLike } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SubscriptionService implements OnDestroy {
    private subs = new SubSink();

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    add(subscription: SubscriptionLike): void {
        this.subs.sink = subscription;
    }
}
