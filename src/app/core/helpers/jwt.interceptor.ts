import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AccountService } from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private accountService: AccountService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const userLogged = this.accountService.userLogged;
		const token = this.accountService.getAccessToken();
		const isLoggedIn = userLogged && token;
		const isApiUrl = request.url.startsWith(environment.apiUrl);

		if (isLoggedIn && isApiUrl) {
			request = request.clone({
				setHeaders: {
					Authorization: `${token}`,
				},
			});
		}

		return next.handle(request);
	}
}
