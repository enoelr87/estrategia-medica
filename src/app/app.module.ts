import { APP_INITIALIZER, Injector, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from './core/helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DialogService } from 'primeng/dynamicdialog';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { appInitializerFactory, HttpTranslateLoader } from './core/utils/app.translation';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		AngularSvgIconModule.forRoot(),
		TranslateModule.forRoot({
			defaultLanguage: 'pt',
			loader: {
				provide: TranslateLoader,
				useClass: HttpTranslateLoader,
				deps: [HttpClient],
			},
			extend: true,
		}),
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: !isDevMode(),
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000',
		}),
	],
	providers: [
		{ provide: APP_INITIALIZER, useFactory: appInitializerFactory, deps: [TranslateService, Injector], multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		// provider used to create fake backend
		fakeBackendProvider,
		DialogService,
		provideHttpClient(withInterceptorsFromDi()),
	],
})
export class AppModule {}
