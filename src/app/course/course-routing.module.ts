import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { ContentListComponent } from './components/content-list/content-list.component';

const routes: Routes = [
    {
        path: '', component: CourseComponent,
        children: [
            { path: '', component: ContentListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }