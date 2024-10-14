import { NgModule } from '@angular/core';
import { PracticalOnlineCourseComponent } from './practical-online-course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PracticalOnlineContentListComponent } from './components/practical-online-content-list/practical-online-content-list.component';
import { PracticalOnlineCourseRoutingModule } from './practical-course-routing.module';

@NgModule({
	declarations: [PracticalOnlineCourseComponent, PracticalOnlineContentListComponent],
	imports: [SharedModule, TranslateModule, PracticalOnlineCourseRoutingModule],
})
export class PracticalOnlineCourseModule {}
