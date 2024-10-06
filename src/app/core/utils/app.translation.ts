import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { finalize, forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { merge } from 'lodash';
import { LOCATION_INITIALIZED } from '@angular/common';

/**
 * Function await for load translation
 * @param translate {@link TranslateService}
 * @param injector {@link Injector}
 */
export function appInitializerFactory(translate: TranslateService, injector: Injector): () => Promise<any> {
	return () =>
		new Promise<any>((resolve: any) => {
			const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
			locationInitialized.then(() => {
				translate
					.use('pt')
					.pipe(
						map(() => console.info("Successfully initialized language.'")),
						catchError(() => of(new Error("Problem with language initialization.'"))),
						finalize(() => resolve(null))
					)
					.subscribe();
			});
		});
}

@Injectable({
	providedIn: 'root',
})
export class HttpTranslateLoader implements TranslateLoader {
	resources: Array<string> = ['common'];

	constructor(private http: HttpClient) {}

	getTranslation(lang: string): Observable<any> {
		const requests = this.resources.map((resource) =>
			this.http.get(`/assets/i18n/${lang}/${resource}.json`).pipe(
				catchError((er) => {
					console.error(er);
					console.error('Something went wrong for the following translation file:', `./assets/i18n/${lang}/${resource}.json`);
					return of({});
				})
			)
		);
		return forkJoin(requests).pipe(map((response) => response.reduce((prev, next) => merge(prev, next), {})));
	}
}
