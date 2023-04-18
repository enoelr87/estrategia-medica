import { NgModule } from '@angular/core';
import { PracticalCourseComponent } from './practical-course.component';
import { PracticalCourseRoutingModule } from './practical-course-routing.module';
import { ContentListComponent } from './practical-course/components/content-list/content-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContentListComponent,
    PracticalCourseComponent
  ],
  imports: [
    SharedModule,
    PracticalCourseRoutingModule
  ]
})
export class PracticalCourseModule { }
