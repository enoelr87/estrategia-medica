import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { ForbiddenRoutingModule } from './forbidden-routing.module';
import { ForbiddenComponent } from './forbidden.component';

@NgModule({
	declarations: [ForbiddenComponent],
	imports: [ForbiddenRoutingModule, AngularSvgIconModule, ButtonModule, TranslateModule],
})
export class ForbiddenModule {}
