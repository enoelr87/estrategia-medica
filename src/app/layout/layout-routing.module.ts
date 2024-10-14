import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { canMatchCourseGuard } from '../core/helpers';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () => import('../modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
			},
			{
				path: 'profile',
				loadChildren: () => import('../modules/profile/profile.module').then((m) => m.ProfileModule),
			},
			{
				path: 'theoretical-course',
				loadChildren: () => import('../modules/theoretical-course/theoretical-course.module').then((m) => m.TheoreticalCourseModule),
				canActivate: [canMatchCourseGuard],
			},
			{
				path: 'questions-course',
				loadChildren: () => import('../modules/questions-course/questions-course.module').then((m) => m.QuestionsCourseModule),
				canActivate: [canMatchCourseGuard],
			},
			{
				path: 'pos-edital-course',
				loadChildren: () => import('../modules/pos-edital-course/pos-edital-course.module').then((m) => m.PosEditalCourseModule),
				canActivate: [canMatchCourseGuard],
			},
			{
				path: 'practical-course',
				loadChildren: () => import('../modules/practical-course/practical-course.module').then((m) => m.PracticalCourseModule),
				canActivate: [canMatchCourseGuard],
			},
			{
				path: 'practical-online-course',
				loadChildren: () => import('../modules/practical-online-course/practical-online-course.module').then((m) => m.PracticalOnlineCourseModule),
				canActivate: [canMatchCourseGuard],
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
