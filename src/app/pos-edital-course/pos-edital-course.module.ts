import { NgModule } from '@angular/core';
import { PosEditalCourseComponent } from './pos-edital-course.component';
import { PosEditalContentListComponent } from './components/pos-edital-content-list/pos-edital-content-list.component';
import { SharedModule } from '../shared/shared.module';
import { PosEditalCourseRoutingModule } from './pos-edital-course-routing.module';

@NgModule({
  declarations: [
    PosEditalCourseComponent,
    PosEditalContentListComponent
  ],
  imports: [
    PosEditalCourseRoutingModule,
    SharedModule
  ]
})
export class PosEditalCourseModule { }
