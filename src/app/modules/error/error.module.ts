import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { ErrorComponent } from './error.component';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
	declarations: [ErrorComponent],
	imports: [ErrorRoutingModule, ButtonModule, TranslateModule, AngularSvgIconModule],
})
export class ErrorModule {}
