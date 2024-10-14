import { Component } from '@angular/core';
import { UserData } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	user: UserData;

	constructor(private accountService: AccountService) {
		this.accountService.user.subscribe((x) => (this.user = x));
	}

	logout() {
		this.accountService.logout();
	}
}
