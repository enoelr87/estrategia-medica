import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticalOnlineCourseComponent } from './practical-online-course.component';
import { PracticalOnlineContentListComponent } from './components/practical-online-content-list/practical-online-content-list.component';

const routes: Routes = [
	{
		path: '',
		component: PracticalOnlineCourseComponent,
		children: [{ path: '', component: PracticalOnlineContentListComponent }],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PracticalOnlineCourseRoutingModule {}
