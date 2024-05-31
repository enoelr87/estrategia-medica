import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosEditalCourseComponent } from './pos-edital-course.component';
import { PosEditalContentListComponent } from './components/pos-edital-content-list/pos-edital-content-list.component';

const routes: Routes = [
    {
        path: '', component: PosEditalCourseComponent,
        children: [
            { path: '', component: PosEditalContentListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PosEditalCourseRoutingModule { }