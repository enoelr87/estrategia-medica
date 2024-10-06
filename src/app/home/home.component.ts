import { Component } from '@angular/core';

import { UserData } from '../core/models';
import { AccountService } from '../core/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	templateUrl: 'home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	user: UserData;

	constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) {
		this.user = this.accountService.userValue;
	}

	goToCourse(courseUrl: string): void {
		this.router.navigateByUrl(courseUrl);
	}
}
