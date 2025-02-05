import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalRectCourseComponent } from './final-rect-course.component';
import { FinalRectContentListComponent } from './components/final-rect-content-list/final-rect-content-list.component';

const routes: Routes = [
	{
		path: '',
		component: FinalRectCourseComponent,
		children: [{ path: '', component: FinalRectContentListComponent }],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FinalRectCourseRoutingModule {}
