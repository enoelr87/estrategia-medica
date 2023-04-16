import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './components/content-list/content-list.component';
import { CourseComponent } from './course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseRoutingModule } from './course-routing.module';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContentListComponent,
    CourseComponent,
    ViewDataComponent
  ],
  imports: [
    SharedModule,
    CourseRoutingModule
  ],
})
export class CourseModule { }
