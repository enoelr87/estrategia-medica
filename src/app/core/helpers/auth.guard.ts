import { inject, Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, UrlTree } from '@angular/router';
import { AccountService } from '../services';
import { Observable } from 'rxjs';

export const canMatchAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state);
export const canMatchCourseGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
	inject(AuthGuard).canMatchCourseGuard(route, state);

@Injectable({ providedIn: 'root' })
export class AuthGuard {
	constructor(private router: Router, private accountService: AccountService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		const user = this.accountService.userValue;
		if (user) {
			// authorised so return true
			return true;
		}

		this.router.navigate(['/login']).then();
		return false;
	}

	canMatchCourseGuard(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.accountService.userValue.courses.includes(route.queryParams.courseId)) {
			return true;
		}
		return this.router.navigate(['/forbidden']).then();
	}
}
