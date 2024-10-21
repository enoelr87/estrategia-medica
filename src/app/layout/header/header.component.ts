import { Component } from '@angular/core';
import { UserData } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	userLogged: UserData;

	constructor(private accountService: AccountService, private authService: AuthService) {
		this.userLogged = this.accountService.userLogged;
	}

	logout() {
		this.authService.logout();
	}
}
