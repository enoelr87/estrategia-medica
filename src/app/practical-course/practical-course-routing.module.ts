import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticalCourseComponent } from './practical-course.component';
import { ContentListComponent } from './practical-course/components/content-list/content-list.component';

const routes: Routes = [
    {
        path: '', component: PracticalCourseComponent,
        children: [
            { path: '', component: ContentListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PracticalCourseRoutingModule { }