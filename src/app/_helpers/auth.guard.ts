import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
	constructor(private router: Router, private accountService: AccountService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const user = this.accountService.userValue;
		if (user) {
			// authorised so return true
			return true;
		}

		this.router.navigate(['/account/login']).then();
		return false;
	}
}
