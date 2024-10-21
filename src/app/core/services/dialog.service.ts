import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogShowInfoComponent } from 'src/app/shared/components/dialog-show-info/dialog-show-info.component';

interface DownloadDialog {
	ref: DynamicDialogRef<DialogShowInfoComponent>;
	url: string;
}

@Injectable({
	providedIn: 'root',
})
export class DownloadMessageService {
	downloadDialogs: DownloadDialog[] = [];

	constructor(private dialogService: DialogService) {}

	show(url: string): void {
		const dialogCount = this.downloadDialogs.length;
		const bottomPosition = 20 + dialogCount * 70;
		const downloadDialog = this.dialogService.open(DialogShowInfoComponent, {
			header: '',
			data: { url },
			modal: false,
			closable: false,
			duplicate: true,
			contentStyle: { width: '380px' },
			styleClass: 'downloadDialog',
			style: {
				position: 'fixed',
				bottom: `${bottomPosition}px`,
				right: '20px',
			},
		});
		if (this.downloadDialogs.length === 0) {
			this.downloadDialogs.push({ ref: downloadDialog, url });
		}
	}

	hide(url: string): void {
		const dialogIndex = this.downloadDialogs.findIndex((dialog) => dialog.url === url);
		if (dialogIndex !== -1) {
			const dialog = this.downloadDialogs[dialogIndex];
			dialog.ref.close();
			this.downloadDialogs.splice(dialogIndex, 1);
			this.updateDialogPositions();
		}
	}

	private updateDialogPositions(): void {
		this.downloadDialogs.forEach((dialog, index) => {
			const bottomPosition = 20 + index * 70;
			(dialog.ref as any).style = { bottom: `${bottomPosition}px` };
		});
	}
}
