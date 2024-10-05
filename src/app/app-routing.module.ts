import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then((x) => x.AccountModule);
const usersModule = () => import('./users/users.module').then((x) => x.UsersModule);
const theoreticalCourseModule = () => import('./theoretical-course/theoretical-course.module').then((x) => x.TheoreticalCourseModule);
const practicalCourseModule = () => import('./practical-course/practical-course.module').then((x) => x.PracticalCourseModule);
const questionsCourseModule = () => import('./questions-course/questions-course.module').then((x) => x.QuestionsCourseModule);
const posEditalCourseModule = () => import('./pos-edital-course/pos-edital-course.module').then((x) => x.PosEditalCourseModule);

const routes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
	{ path: 'account', loadChildren: accountModule },
	{ path: 'theoretical-course', loadChildren: theoreticalCourseModule, canActivate: [AuthGuard] },
	{ path: 'practical-course', loadChildren: practicalCourseModule, canActivate: [AuthGuard] },
	{ path: 'pos-edital-course', loadChildren: posEditalCourseModule, canActivate: [AuthGuard] },
	{ path: 'questions-course', loadChildren: questionsCourseModule, canActivate: [AuthGuard] },

	// otherwise redirect to home
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
