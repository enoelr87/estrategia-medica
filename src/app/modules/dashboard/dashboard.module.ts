import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	declarations: [DashboardComponent],
	imports: [DashboardRoutingModule, SharedModule, TranslateModule],
})
export class DashboardModule {}
