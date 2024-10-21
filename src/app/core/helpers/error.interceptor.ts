import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { DownloadMessageService } from '../services/dialog.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService, private downloadService: DownloadMessageService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((err) => {
				if (err.status === 403) {
					this.downloadService.show(request.url);
					setTimeout(() => {
						this.authService.logout();
						setTimeout(() => {
							this.downloadService.hide(request.url);
						}, 2000);
					}, 3000);
				}

				const error = err.error.message || err.statusText;
				return throwError(error);
			})
		);
	}
}
