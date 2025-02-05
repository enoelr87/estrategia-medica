import { NgModule } from '@angular/core';
import { FinalRectCourseRoutingModule } from './final-rect-course-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FinalRectCourseComponent } from './final-rect-course.component';
import { FinalRectContentListComponent } from './components/final-rect-content-list/final-rect-content-list.component';

@NgModule({
	declarations: [FinalRectCourseComponent, FinalRectContentListComponent],
	imports: [FinalRectCourseRoutingModule, SharedModule],
})
export class FinalRectCourseModule {}
