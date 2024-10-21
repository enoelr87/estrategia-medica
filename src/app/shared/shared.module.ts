import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { TranslateModule } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProgressBarModule } from 'primeng/progressbar';

import { ViewFileComponent } from './components/view-file/view-file.component';
import { DialogShowInfoComponent } from './components/dialog-show-info/dialog-show-info.component';

@NgModule({
	declarations: [ViewFileComponent, DialogShowInfoComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,

		DataViewModule,
		RatingModule,
		TagModule,
		InputTextModule,
		ButtonModule,
		SelectButtonModule,
		DropdownModule,
		CardModule,
		TooltipModule,
		AccordionModule,
		RadioButtonModule,
		DialogModule,
		TabMenuModule,
		MultiSelectModule,
		TableModule,
		PaginatorModule,
		ToggleButtonModule,
		ToastModule,
		PasswordModule,
		BreadcrumbModule,
		ProgressBarModule,
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		DataViewModule,
		RatingModule,
		TagModule,
		InputTextModule,
		ButtonModule,
		SelectButtonModule,
		DropdownModule,
		CardModule,
		TooltipModule,
		AccordionModule,
		RadioButtonModule,
		DialogModule,
		TabMenuModule,
		MultiSelectModule,
		TableModule,
		PaginatorModule,
		ToggleButtonModule,
		ToastModule,
		PasswordModule,
		BreadcrumbModule,
		ProgressBarModule,

		ViewFileComponent,
		DialogShowInfoComponent,
	],
	providers: [DialogService, MessageService],
})
export class SharedModule {}
