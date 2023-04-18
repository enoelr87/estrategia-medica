import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsCourseComponent } from './questions-course.component';
import { ContentListComponent } from './components/content-list/content-list.component';

const routes: Routes = [
    {
        path: '', component: QuestionsCourseComponent,
        children: [
            { path: '', component: ContentListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionsCourseRoutingModule { }