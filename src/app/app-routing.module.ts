import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canMatchAuthGuard } from './core/helpers';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
		canActivate: [canMatchAuthGuard],
	},
	{ path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'top',
			enableTracing: false,
			onSameUrlNavigation: 'reload',
			anchorScrolling: 'enabled',
			scrollOffset: [0, 64],
			bindToComponentInputs: true,
		}),
		AuthModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
