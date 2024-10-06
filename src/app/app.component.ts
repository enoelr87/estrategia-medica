import { Component } from '@angular/core';

import { AccountService } from './core/services';
import { UserData } from './core/models';

@Component({ selector: 'rm-app', templateUrl: 'app.component.html' })
export class AppComponent {
	user: UserData;

	constructor(private accountService: AccountService) {
		this.accountService.user.subscribe((x) => (this.user = x));
	}

	logout() {
		this.accountService.logout();
	}

	closeToast(): void {
		document.location.reload();
	}
}
