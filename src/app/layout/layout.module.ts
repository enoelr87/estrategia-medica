import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [HeaderComponent, LayoutComponent, BreadcrumbComponent, UserMenuComponent, NotificationsComponent],
	imports: [RouterModule, SharedModule, LayoutRoutingModule, TranslateModule],
	exports: [LayoutComponent],
})
export class LayoutModule {}
