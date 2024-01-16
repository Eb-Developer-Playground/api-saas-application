import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertType } from '../../models/alert';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';

    constructor(private snackBar: MatSnackBar) {}
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.id === id));
    }

    // convenience methods
    success(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Success, message }));
    }

    error(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Error, message }));
    }

    info(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Info, message }));
    }

    warn(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
    }

    // main alert method    
    alert(alert: Alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
        this.showSnackBar(alert);
    }

    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new Alert({ id }));
    }

    private showSnackBar(alert: Alert): void {
        const durationInSeconds = 5;
        const snackBarRef = this.snackBar.open(alert.message, 'Close', {
            duration: durationInSeconds *1000,
            verticalPosition: 'top',
            panelClass: this.getSnackBarClass(alert.type),
        });
    
        snackBarRef.onAction().subscribe(() => {
          // Handle action click if needed
        });
    }

    private getSnackBarClass(type: AlertType): string {
    switch (type) {
        case AlertType.Success:
        return 'success-snackbar';
        case AlertType.Error:
        return 'error-snackbar';
        case AlertType.Info:
        return 'info-snackbar';
        case AlertType.Warning:
        return 'warning-snackbar';
        default:
        return '';
    }
    }
}