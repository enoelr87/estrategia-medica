import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { canMatchCourseGuard } from '../core/helpers';
import { UserResolver } from '../core/helpers/user.resolver';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () => import('../modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
				resolve: {
					user: UserResolver,
				},
			},
			{
				path: 'profile',
				loadChildren: () => import('../modules/profile/profile.module').then((m) => m.ProfileModule),
				resolve: {
					user: UserResolver,
				},
			},
			{
				path: 'theoretical-course',
				loadChildren: () => import('../modules/theoretical-course/theoretical-course.module').then((m) => m.TheoreticalCourseModule),
				canActivate: [canMatchCourseGuard],
				resolve: {
					user: UserResolver,
				},
			},
			{
				path: 'questions-course',
				loadChildren: () => import('../modules/questions-course/questions-course.module').then((m) => m.QuestionsCourseModule),
				canActivate: [canMatchCourseGuard],
				resolve: {
					user: UserResolver,
				},
			},
			{
				path: 'pos-edital-course',
				loadChildren: () => import('../modules/pos-edital-course/pos-edital-course.module').then((m) => m.PosEditalCourseModule),
				canActivate: [canMatchCourseGuard],
				resolve: {
					user: UserResolver,
				},
			},
			{
				path: 'practical-course',
				loadChildren: () => import('../modules/practical-course/practical-course.module').then((m) => m.PracticalCourseModule),
				canActivate: [canMatchCourseGuard],
				resolve: {
					user: UserResolver,
				},
			},
			{
				path: 'practical-online-course',
				loadChildren: () => import('../modules/practical-online-course/practical-online-course.module').then((m) => m.PracticalOnlineCourseModule),
				canActivate: [canMatchCourseGuard],
				resolve: {
					user: UserResolver,
				},
			},
			{
				path: 'forbidden',
				loadChildren: () => import('../modules/forbidden/forbidden.module').then((m) => m.ForbiddenModule),
			},
			{
				path: 'under-construction',
				loadChildren: () => import('../modules/under-construction/under-construction.module').then((m) => m.UnderConstructionModule),
			},
			{
				path: 'not-found',
				loadChildren: () => import('../modules/not-found/not-found.module').then((m) => m.NotFoundModule),
			},
			{
				path: 'error',
				loadChildren: () => import('../modules/error/error.module').then((m) => m.ErrorModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
