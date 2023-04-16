import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './components/content-list/content-list.component';
import { TheoreticalCourseComponent } from './theoretical-course.component';

const routes: Routes = [
    {
        path: '', component: TheoreticalCourseComponent,
        children: [
            { path: '', component: ContentListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TheoreticalCourseRoutingModule { }