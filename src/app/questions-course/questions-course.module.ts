import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { QuestionsCourseComponent } from './questions-course.component';
import { QuestionsCourseRoutingModule } from './questions-course-routing.module';
import { ContentListComponent } from './components/content-list/content-list.component';



@NgModule({
  declarations: [
    QuestionsCourseComponent,
    ContentListComponent,
  ],
  imports: [
    QuestionsCourseRoutingModule,
    SharedModule
  ]
})
export class QuestionsCourseModule { }
