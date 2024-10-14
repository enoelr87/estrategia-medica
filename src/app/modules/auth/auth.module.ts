import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [LoginComponent],
	imports: [SharedModule, AuthRoutingModule, TranslateModule],
})
export class AuthModule {}
