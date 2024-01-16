// modal.service.ts
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    constructor(private dialog: MatDialog) { }

    openModal(component: any, config?: MatDialogConfig): Observable<any> {
        const dialogRef = this.dialog.open(component, config);
        return dialogRef.afterClosed();
    }
}
