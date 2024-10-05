import { NgModule } from '@angular/core';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { SharedModule } from '../shared/shared.module';
import { TheoreticalCourseRoutingModule } from './theoretical-course-routing.module';
import { TheoreticalCourseComponent } from './theoretical-course.component';



@NgModule({
  declarations: [
    ContentListComponent,
    TheoreticalCourseComponent,
    ViewDataComponent
  ],
  imports: [
    SharedModule,
    TheoreticalCourseRoutingModule
  ],
})
export class TheoreticalCourseModule { }
