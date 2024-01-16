import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { ApiKeyService } from 'src/app/services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-api-key-form',
  templateUrl: './api-key-form.component.html',
  styleUrls: ['./api-key-form.component.scss']
})
export class ApiKeyFormComponent {
  @Output() apiKeyGenerated = new EventEmitter<string>();

  constructor(
    public dialogRef: MatDialogRef<ApiKeyFormComponent>,
    private apiKeyService: ApiKeyService,
    private router: Router,
    private clipboard: Clipboard, // Inject the Clipboard service
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  generateApiKey(): void {
    const apiKey = this.apiKeyService.generateApiKey();
    this.apiKeyGenerated.emit(apiKey);
  }

  copyToClipboard(apiKey: string): void {
    this.clipboard.copy(apiKey);
    // Optionally, provide user feedback (e.g., show a message)
    console.log('API Key copied to clipboard:', apiKey);
  }

  viewApiKeysAndCloseModal(): void {
    this.router.navigate(['/user/apikeys']);
    this.dialogRef.close();
  }
  
  closeModal(): void {
    this.dialogRef.close();
  }
}
