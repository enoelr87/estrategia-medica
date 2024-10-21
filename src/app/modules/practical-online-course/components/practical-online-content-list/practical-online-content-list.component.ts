import { Component } from '@angular/core';
import { UserData } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';

@Component({
	selector: 'app-practical-online-content-list',
	templateUrl: './practical-online-content-list.component.html',
	styleUrl: './practical-online-content-list.component.scss',
})
export class PracticalOnlineContentListComponent {
	userLogged: UserData;

	stateOptions: any[] = [];
	state: string;

	layout: string = 'list';

	dataList: any[] = [];
	dataListTemp: any[] = [];

	constructor(private accountService: AccountService) {
		this.userLogged = this.accountService.userLogged;

		this.stateOptions = [
			{ label: 'List', value: 'list', icon: 'pi pi-list' },
			{ label: 'Grid', value: 'grid', icon: 'pi pi-microsoft' },
		];
		this.state = 'list';

		this.dataList = [
			{
				id: '1',
				link: 'https://mega.nz/folder/Sd5FiKhI#5AGchE8Z8YqvxoAu8tCwnA',
				name: 'Introdução',
				description: 'Introdução',
				image: 'introducao.jpg',
				category: 'Introdução',
			},
			{
				id: '2',
				link: 'https://mega.nz/folder/yVJQhSgT#iVp6XwrSMyoQDEPyNJKDNg',
				name: 'Cirurgia',
				description: 'Cirurgia',
				image: 'cirugia.jpg',
				category: 'Cirurgia',
			},
			{
				id: '3',
				link: 'https://mega.nz/folder/DJRCzIRI#S7zBJc5rmdcgpUlpDxlOZg',
				name: 'Clínica Médica',
				description: 'Clínica Médica',
				image: 'clinica-medica.jpg',
				category: 'Clínica Médica',
			},
			{
				id: '4',
				link: 'https://mega.nz/folder/nFZAGSwQ#IYGdCyT-UybneU9-I_4AVA',
				name: 'Ginecologia e Obstetrícia',
				description: 'Ginecologia e Obstetrícia',
				image: 'ginecologia-obstetricia.jpg',
				category: 'Ginecologia e Obstetrícia',
			},
			{
				id: '5',
				link: 'https://mega.nz/folder/WQp2DL6A#hDG2J-VnDicz0kNywG3q6w',
				name: 'Medicina de Família e Comunidade Preventiva',
				description: 'Medicina de Família e Comunidade Preventiva',
				image: 'medicina-familia.jpg',
				category: 'Medicina de Família e Comunidade Preventiva',
			},
			{
				id: '6',
				link: 'https://mega.nz/folder/XMB0lArZ#JcUktYJaA22siot3TvDbCg',
				name: 'Pediatria',
				description: 'Pediatria',
				image: 'pediatria.jpg',
				category: 'Pediatria',
			},
		];
		this.dataListTemp = [...this.dataList];
	}

	changeStateOption(event: any): void {
		this.layout = event.value;
	}

	viewData(event: any, link): void {
		window.open(link, '_blank');
	}
}
