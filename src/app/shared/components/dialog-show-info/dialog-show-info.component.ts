import { Component } from '@angular/core';

@Component({
	selector: 'app-dialog-show-info',
	templateUrl: './dialog-show-info.component.html',
	styleUrl: './dialog-show-info.component.scss',
})
export class DialogShowInfoComponent {
	progressValue: number = 100;

	ngOnInit(): void {
		this.startProgress();
	}

	startProgress(): void {
		const interval = setInterval(() => {
			this.progressValue -= 1;
			if (this.progressValue <= 0) {
				clearInterval(interval);
				this.progressValue = 0;
			}
		}, 30); // 3000ms / 100 steps = 30ms per step
	}
}
