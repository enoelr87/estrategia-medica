import { Component } from '@angular/core';
import { AccountService } from './core/services';
import { UserData } from './core/models';

@Component({ selector: 'rm-app', templateUrl: 'app.component.html' })
export class AppComponent {
	userLogged: UserData;

	constructor(private accountService: AccountService) {
		this.userLogged = this.accountService.userLogged;
	}

	closeToast(): void {
		document.location.reload();
	}
}
