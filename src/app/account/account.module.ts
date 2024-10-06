import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [SharedModule, AccountRoutingModule],
	declarations: [LayoutComponent, LoginComponent],
})
export class AccountModule {}
