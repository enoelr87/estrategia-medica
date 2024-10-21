import { Component, effect, input } from '@angular/core';

declare const PDFObject: any;

@Component({
	selector: 'app-view-file',
	templateUrl: './view-file.component.html',
	styleUrl: './view-file.component.scss',
})
export class ViewFileComponent {
	indexNro = input<number>(0);
	pdfUrl = input<string>(null);

	constructor() {
		effect(() => {
			if (this.pdfUrl()) {
				this.handleRenderPdf(this.pdfUrl());
			}
		});
	}

	handleRenderPdf(data: any): void {
		const url = window.location.origin + data;
		PDFObject.embed(url, '#pdfViewContainer' + this.indexNro());
	}
}
