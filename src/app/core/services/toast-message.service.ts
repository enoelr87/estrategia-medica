import { MessageService } from 'primeng/api';
import { Injectable, OnDestroy } from '@angular/core';

type Severity = 'success' | 'info' | 'warn' | 'error';

@Injectable({
	providedIn: 'root',
})
export class ToastMessageService implements OnDestroy {
	constructor(private messageService: MessageService) {}

	handleError(error: any, title = 'Erro', life = 60000): void {
		this.messageService.add({ severity: 'error', summary: title, life, detail: error });
	}

	showMessage(type: Severity, title: string, message: string, life = 10000): void {
		this.messageService.add({ severity: type, summary: title, life, detail: message });
	}

	clear(): void {
		this.messageService.clear();
	}

	ngOnDestroy(): void {
		this.clear();
	}
}
