import { Component, input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
	items = input<MenuItem[] | undefined>();
	home: MenuItem | undefined;

	ngOnInit() {
		this.home = { icon: 'pi pi-home', routerLink: '/' };
	}
}
