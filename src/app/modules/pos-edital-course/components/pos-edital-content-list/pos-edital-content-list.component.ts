import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UserData } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';

@Component({
	selector: 'app-pos-edital-content-list',
	templateUrl: './pos-edital-content-list.component.html',
	styleUrls: ['./pos-edital-content-list.component.scss'],
})
export class PosEditalContentListComponent implements AfterViewInit {
	userLogged: UserData;

	title = 'pos-edital';
	jsonFiles: any[] = [];
	questionsListData: any[] = [];
	questionsListFormatted: any[] = [];
	activeMeta: string = '';
	activeContent: string = '';
	selectedOptions: any[] = [];
	activeQuestion: number = 0;
	activeOptionQuestion: any = null;
	discursiveVisible: boolean = false;
	textCheckButtons: any[] = [];
	activeState: boolean[] = [false, false, false, false, false, false, false, false];

	showVideoQuestion: boolean = false;
	actualVideoUrl: string = '';

	@ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
	public videoElement: HTMLVideoElement;

	constructor(private httpClient: HttpClient, private accountService: AccountService) {
		this.userLogged = this.accountService.userLogged;

		this.jsonFiles = [
			{
				meta: 'META 1',
				metaPdf: 'META 1/Meta 1 - Pos-Edital Revalida INEP 202311.pdf',
				listContent: [
					'TAREFA01',
					'TAREFA02',
					'TAREFA03',
					'TAREFA04',
					'TAREFA05',
					'TAREFA06',
					'TAREFA07',
					'TAREFA08',
					'TAREFA09',
					'TAREFA10',
					'TAREFA11',
					'TAREFA12',
					'TAREFA13',
					'TAREFA14',
					'TAREFA15',
					'TAREFA16',
					'TAREFA17',
					'TAREFA18',
					'TAREFAC01',
					'TAREFAC02',
					'TAREFAC03',
				],
				listFiles: [
					'META 1/TAREFA01/TAREFA011.JSON',
					'META 1/TAREFA01/TAREFA012.JSON',
					'META 1/TAREFA02/TAREFA021.JSON',
					'META 1/TAREFA03/TAREFA031.JSON',
					'META 1/TAREFA04/TAREFA041.JSON',
					'META 1/TAREFA05/TAREFA051.JSON',
					'META 1/TAREFA06/TAREFA061.JSON',
					'META 1/TAREFA07/TAREFA071.JSON',
					'META 1/TAREFA07/TAREFA072.JSON',
					'META 1/TAREFA08/TAREFA081.JSON',
					'META 1/TAREFA08/TAREFA082.JSON',
					'META 1/TAREFA09/TAREFA091.JSON',
					'META 1/TAREFA09/TAREFA092.JSON',
					'META 1/TAREFA10/TAREFA101.JSON',
					'META 1/TAREFA10/TAREFA102.JSON',
					'META 1/TAREFA11/TAREFA111.JSON',
					'META 1/TAREFA12/TAREFA121.JSON',
					'META 1/TAREFA13/TAREFA131.JSON',
					'META 1/TAREFA14/TAREFA141.JSON',
					'META 1/TAREFA15/TAREFA151.JSON',
					'META 1/TAREFA15/TAREFA152.JSON',
					'META 1/TAREFA16/TAREFA161.JSON',
					'META 1/TAREFA17/TAREFA171.JSON',
					'META 1/TAREFA18/TAREFA181.JSON',
					'META 1/TAREFAC01/TAREFAC011.JSON',
					'META 1/TAREFAC02/TAREFAC021.JSON',
					'META 1/TAREFAC02/TAREFAC022.JSON',
					'META 1/TAREFAC03/TAREFAC031.JSON',
					'META 1/TAREFAC03/TAREFAC032.JSON',
				],
			},
			{
				meta: 'META 2',
				metaPdf: 'META 2/Meta 2 - Pos-Edital Revalida INEP 20231.pdf',
				listContent: [
					'TAREFA01',
					'TAREFA02',
					'TAREFA03',
					'TAREFA04',
					'TAREFA05',
					'TAREFA06',
					'TAREFA07',
					'TAREFA08',
					'TAREFA09',
					'TAREFA10',
					'TAREFA11',
					'TAREFA12',
					'TAREFA13',
					'TAREFA14',
					'TAREFA15',
					'TAREFA16',
					'TAREFA17',
					'TAREFA18',
					'TAREFA19',
					'TAREFAC01',
					'TAREFAC02',
					'TAREFAC03',
				],
				listFiles: [
					'META 2/TAREFA01/TAREFA011.JSON',
					'META 2/TAREFA02/TAREFA021.JSON',
					'META 2/TAREFA03/TAREFA031.JSON',
					'META 2/TAREFA04/TAREFA041.JSON',
					'META 2/TAREFA05/TAREFA051.JSON',
					'META 2/TAREFA06/TAREFA061.JSON',
					'META 2/TAREFA07/TAREFA071.JSON',
					'META 2/TAREFA08/TAREFA081.JSON',
					'META 2/TAREFA08/TAREFA082.JSON',
					'META 2/TAREFA09/TAREFA091.JSON',
					'META 2/TAREFA10/TAREFA101.JSON',
					'META 2/TAREFA10/TAREFA102.JSON',
					'META 2/TAREFA11/TAREFA111.JSON',
					'META 2/TAREFA11/TAREFA112.JSON',
					'META 2/TAREFA12/TAREFA121.JSON',
					'META 2/TAREFA13/TAREFA131.JSON',
					'META 2/TAREFA14/TAREFA141.JSON',
					'META 2/TAREFA15/TAREFA151.JSON',
					'META 2/TAREFA16/TAREFA161.JSON',
					'META 2/TAREFA17/TAREFA171.JSON',
					'META 2/TAREFA18/TAREFA181.JSON',
					'META 2/TAREFA19/TAREFA191.JSON',
					'META 2/TAREFAC01/TAREFAC011.JSON',
					'META 2/TAREFAC02/TAREFAC021.JSON',
					'META 2/TAREFAC03/TAREFAC031.JSON',
				],
			},
			{
				meta: 'META 3',
				metaPdf: 'META 3/Meta 3 - Pos-Edital Revalida INEP 20231.pdf',
				listContent: [
					'TAREFA01',
					'TAREFA02',
					'TAREFA03',
					'TAREFA04',
					'TAREFA05',
					'TAREFA06',
					'TAREFA07',
					'TAREFA08',
					'TAREFA09',
					'TAREFA10',
					'TAREFA11',
					'TAREFA12',
					'TAREFA13',
					'TAREFA14',
					'TAREFA15',
					'TAREFA16',
					'TAREFA17',
					'TAREFA18',
					'TAREFA19',
					'TAREFA20',
					'TAREFAC01',
					'TAREFAC02',
					'TAREFAC03',
				],
				listFiles: [
					'META 3/TAREFA01/TAREFA011.JSON',
					'META 3/TAREFA02/TAREFA021.JSON',
					'META 3/TAREFA02/TAREFA022.JSON',
					'META 3/TAREFA03/TAREFA031.JSON',
					'META 3/TAREFA03/TAREFA032.JSON',
					'META 3/TAREFA04/TAREFA041.JSON',
					'META 3/TAREFA04/TAREFA042.JSON',
					'META 3/TAREFA05/TAREFA051.JSON',
					'META 3/TAREFA05/TAREFA052.JSON',
					'META 3/TAREFA06/TAREFA061.JSON',
					'META 3/TAREFA06/TAREFA062.JSON',
					'META 3/TAREFA07/TAREFA071.JSON',
					'META 3/TAREFA07/TAREFA072.JSON',
					'META 3/TAREFA08/TAREFA081.JSON',
					'META 3/TAREFA08/TAREFA082.JSON',
					'META 3/TAREFA09/TAREFA091.JSON',
					'META 3/TAREFA09/TAREFA092.JSON',
					'META 3/TAREFA10/TAREFA101.JSON',
					'META 3/TAREFA10/TAREFA102.JSON',
					'META 3/TAREFA11/TAREFA111.JSON',
					'META 3/TAREFA11/TAREFA112.JSON',
					'META 3/TAREFA12/TAREFA121.JSON',
					'META 3/TAREFA13/TAREFA131.JSON',
					'META 3/TAREFA14/TAREFA141.JSON',
					'META 3/TAREFA15/TAREFA151.JSON',
					'META 3/TAREFA15/TAREFA152.JSON',
					'META 3/TAREFA16/TAREFA161.JSON',
					'META 3/TAREFA16/TAREFA162.JSON',
					'META 3/TAREFA17/TAREFA171.JSON',
					'META 3/TAREFA18/TAREFA181.JSON',
					'META 3/TAREFA19/TAREFA191.JSON',
					'META 3/TAREFA20/TAREFA201.JSON',
					'META 3/TAREFAC01/TAREFAC011.JSON',
					'META 3/TAREFAC02/TAREFAC021.JSON',
					'META 3/TAREFAC03/TAREFAC031.JSON',
				],
			},
			{
				meta: 'META 4',
				metaPdf: 'META 4/Meta 4 - Pos-Edital Revalida INEP 20231.pdf',
				listContent: [
					'TAREFA01',
					'TAREFA02',
					'TAREFA03',
					'TAREFA04',
					'TAREFA05',
					'TAREFA06',
					'TAREFA07',
					'TAREFA08',
					'TAREFA09',
					'TAREFA10',
					'TAREFA11',
					'TAREFA12',
					'TAREFA13',
					'TAREFA14',
					'TAREFA15',
					'TAREFA16',
					'TAREFA17',
					'TAREFA18',
					'TAREFA19',
					'TAREFA20',
					'TAREFA21',
					'TAREFAC01',
					'TAREFAC02',
					'TAREFAC03',
				],
				listFiles: [
					'META 4/TAREFA01/TAREFA011.JSON',
					'META 4/TAREFA01/TAREFA012.JSON',
					'META 4/TAREFA02/TAREFA021.JSON',
					'META 4/TAREFA02/TAREFA022.JSON',
					'META 4/TAREFA03/TAREFA031.JSON',
					'META 4/TAREFA03/TAREFA032.JSON',
					'META 4/TAREFA04/TAREFA041.JSON',
					'META 4/TAREFA04/TAREFA042.JSON',
					'META 4/TAREFA05/TAREFA051.JSON',
					'META 4/TAREFA06/TAREFA061.JSON',
					'META 4/TAREFA07/TAREFA071.JSON',
					'META 4/TAREFA07/TAREFA072.JSON',
					'META 4/TAREFA08/TAREFA081.JSON',
					'META 4/TAREFA08/TAREFA082.JSON',
					'META 4/TAREFA09/TAREFA091.JSON',
					'META 4/TAREFA09/TAREFA092.JSON',
					'META 4/TAREFA10/TAREFA101.JSON',
					'META 4/TAREFA10/TAREFA102.JSON',
					'META 4/TAREFA11/TAREFA111.JSON',
					'META 4/TAREFA11/TAREFA112.JSON',
					'META 4/TAREFA12/TAREFA121.JSON',
					'META 4/TAREFA12/TAREFA122.JSON',
					'META 4/TAREFA13/TAREFA131.JSON',
					'META 4/TAREFA13/TAREFA132.JSON',
					'META 4/TAREFA14/TAREFA141.JSON',
					'META 4/TAREFA14/TAREFA142.JSON',
					'META 4/TAREFA15/TAREFA151.JSON',
					'META 4/TAREFA16/TAREFA161.JSON',
					'META 4/TAREFA17/TAREFA171.JSON',
					'META 4/TAREFA17/TAREFA172.JSON',
					'META 4/TAREFA18/TAREFA181.JSON',
					'META 4/TAREFA18/TAREFA182.JSON',
					'META 4/TAREFA19/TAREFA191.JSON',
					'META 4/TAREFA19/TAREFA192.JSON',
					'META 4/TAREFA20/TAREFA201.JSON',
					'META 4/TAREFA21/TAREFA211.JSON',
					'META 4/TAREFAC01/TAREFAC011.JSON',
					'META 4/TAREFAC01/TAREFAC012.JSON',
					'META 4/TAREFAC02/TAREFAC021.JSON',
					'META 4/TAREFAC03/TAREFAC031.JSON',
					'META 4/TAREFAC03/TAREFAC032.JSON',
				],
			},
			{
				meta: 'META 5',
				metaPdf: 'META 5/Meta 5 - Pos-Edital Revalida INEP 20231.pdf',
				listContent: [
					'TAREFA01',
					'TAREFA02',
					'TAREFA03',
					'TAREFA04',
					'TAREFA05',
					'TAREFA06',
					'TAREFA07',
					'TAREFA08',
					'TAREFA09',
					'TAREFA10',
					'TAREFA11',
					'TAREFA12',
					'TAREFA13',
					'TAREFA14',
					'TAREFA15',
					'TAREFA16',
					'TAREFA17',
					'TAREFA18',
					'TAREFA19',
					'TAREFA20',
					'TAREFA21',
					'TAREFA22',
					'TAREFAC01',
					'TAREFAC02',
				],
				listFiles: [
					'META 5/TAREFA01/TAREFA011.JSON',
					'META 5/TAREFA02/TAREFA021.JSON',
					'META 5/TAREFA02/TAREFA022.JSON',
					'META 5/TAREFA03/TAREFA031.JSON',
					'META 5/TAREFA04/TAREFA041.JSON',
					'META 5/TAREFA05/TAREFA051.JSON',
					'META 5/TAREFA05/TAREFA052.JSON',
					'META 5/TAREFA06/TAREFA061.JSON',
					'META 5/TAREFA06/TAREFA062.JSON',
					'META 5/TAREFA07/TAREFA071.JSON',
					'META 5/TAREFA07/TAREFA072.JSON',
					'META 5/TAREFA08/TAREFA081.JSON',
					'META 5/TAREFA08/TAREFA082.JSON',
					'META 5/TAREFA09/TAREFA091.JSON',
					'META 5/TAREFA09/TAREFA092.JSON',
					'META 5/TAREFA10/TAREFA101.JSON',
					'META 5/TAREFA10/TAREFA102.JSON',
					'META 5/TAREFA11/TAREFA111.JSON',
					'META 5/TAREFA11/TAREFA112.JSON',
					'META 5/TAREFA12/TAREFA121.JSON',
					'META 5/TAREFA12/TAREFA122.JSON',
					'META 5/TAREFA13/TAREFA131.JSON',
					'META 5/TAREFA13/TAREFA132.JSON',
					'META 5/TAREFA14/TAREFA141.JSON',
					'META 5/TAREFA14/TAREFA142.JSON',
					'META 5/TAREFA15/TAREFA151.JSON',
					'META 5/TAREFA15/TAREFA152.JSON',
					'META 5/TAREFA16/TAREFA161.JSON',
					'META 5/TAREFA17/TAREFA171.JSON',
					'META 5/TAREFA18/TAREFA181.JSON',
					'META 5/TAREFA19/TAREFA191.JSON',
					'META 5/TAREFA20/TAREFA201.JSON',
					'META 5/TAREFA21/TAREFA211.JSON',
					'META 5/TAREFA22/TAREFA221.JSON',
					'META 5/TAREFAC01/TAREFAC011.JSON',
					'META 5/TAREFAC02/TAREFAC021.JSON',
				],
			},
			{
				meta: 'META 6',
				metaPdf: 'META 6/Meta 6 - Pos-Edital Revalida INEP 20231.pdf',
				listContent: [
					'TAREFA01',
					'TAREFA02',
					'TAREFA03',
					'TAREFA04',
					'TAREFA05',
					'TAREFA06',
					'TAREFA07',
					'TAREFA08',
					'TAREFA09',
					'TAREFA10',
					'TAREFA11',
					'TAREFA12',
					'TAREFA13',
					'TAREFA14',
					'TAREFA15',
					'TAREFA16',
					'TAREFA17',
					'TAREFA18',
					'TAREFA19',
					'TAREFA20',
					'TAREFA21',
					'TAREFAC01',
					'TAREFAC02',
				],
				listFiles: [
					'META 6/TAREFA01/TAREFA011.JSON',
					'META 6/TAREFA01/TAREFA012.JSON',
					'META 6/TAREFA02/TAREFA021.JSON',
					'META 6/TAREFA02/TAREFA022.JSON',
					'META 6/TAREFA03/TAREFA031.JSON',
					'META 6/TAREFA04/TAREFA041.JSON',
					'META 6/TAREFA05/TAREFA051.JSON',
					'META 6/TAREFA06/TAREFA061.JSON',
					'META 6/TAREFA06/TAREFA062.JSON',
					'META 6/TAREFA07/TAREFA071.JSON',
					'META 6/TAREFA07/TAREFA072.JSON',
					'META 6/TAREFA08/TAREFA081.JSON',
					'META 6/TAREFA08/TAREFA082.JSON',
					'META 6/TAREFA09/TAREFA091.JSON',
					'META 6/TAREFA10/TAREFA101.JSON',
					'META 6/TAREFA10/TAREFA102.JSON',
					'META 6/TAREFA11/TAREFA111.JSON',
					'META 6/TAREFA12/TAREFA121.JSON',
					'META 6/TAREFA13/TAREFA131.JSON',
					'META 6/TAREFA13/TAREFA132.JSON',
					'META 6/TAREFA14/TAREFA141.JSON',
					'META 6/TAREFA14/TAREFA142.JSON',
					'META 6/TAREFA15/TAREFA151.JSON',
					'META 6/TAREFA16/TAREFA161.JSON',
					'META 6/TAREFA17/TAREFA171.JSON',
					'META 6/TAREFA18/TAREFA181.JSON',
					'META 6/TAREFA19/TAREFA191.JSON',
					'META 6/TAREFA20/TAREFA201.JSON',
					'META 6/TAREFA20/TAREFA202.JSON',
					'META 6/TAREFA21/TAREFA211.JSON',
					'META 6/TAREFAC01/TAREFAC011.JSON',
					'META 6/TAREFAC02/TAREFAC021.JSON',
				],
			},
			{
				meta: 'META 7',
				metaPdf: 'META 7/Meta 7 - Pos-Edital Revalida INEP 20231.pdf',
				listContent: [
					'TAREFA01',
					'TAREFA02',
					'TAREFA03',
					'TAREFA04',
					'TAREFA05',
					'TAREFA06',
					'TAREFA07',
					'TAREFA08',
					'TAREFA09',
					'TAREFA10',
					'TAREFA11',
					'TAREFA12',
					'TAREFA13',
					'TAREFA14',
					'TAREFA15',
					'TAREFA16',
					'TAREFA17',
					'TAREFA18',
					'TAREFA19',
					'TAREFA20',
					'TAREFA21',
					'TAREFA22',
					'TAREFAC01',
					'TAREFAC02',
				],
				listFiles: [
					'META 7/TAREFA01/TAREFA011.JSON',
					'META 7/TAREFA01/TAREFA012.JSON',
					'META 7/TAREFA02/TAREFA021.JSON',
					'META 7/TAREFA02/TAREFA022.JSON',
					'META 7/TAREFA03/TAREFA031.JSON',
					'META 7/TAREFA03/TAREFA032.JSON',
					'META 7/TAREFA04/TAREFA041.JSON',
					'META 7/TAREFA04/TAREFA042.JSON',
					'META 7/TAREFA05/TAREFA051.JSON',
					'META 7/TAREFA05/TAREFA052.JSON',
					'META 7/TAREFA06/TAREFA061.JSON',
					'META 7/TAREFA06/TAREFA062.JSON',
					'META 7/TAREFA07/TAREFA071.JSON',
					'META 7/TAREFA07/TAREFA072.JSON',
					'META 7/TAREFA08/TAREFA081.JSON',
					'META 7/TAREFA08/TAREFA082.JSON',
					'META 7/TAREFA09/TAREFA091.JSON',
					'META 7/TAREFA10/TAREFA101.JSON',
					'META 7/TAREFA10/TAREFA102.JSON',
					'META 7/TAREFA11/TAREFA111.JSON',
					'META 7/TAREFA11/TAREFA112.JSON',
					'META 7/TAREFA12/TAREFA121.JSON',
					'META 7/TAREFA12/TAREFA122.JSON',
					'META 7/TAREFA13/TAREFA131.JSON',
					'META 7/TAREFA13/TAREFA132.JSON',
					'META 7/TAREFA14/TAREFA141.JSON',
					'META 7/TAREFA14/TAREFA142.JSON',
					'META 7/TAREFA15/TAREFA151.JSON',
					'META 7/TAREFA16/TAREFA161.JSON',
					'META 7/TAREFA17/TAREFA171.JSON',
					'META 7/TAREFA17/TAREFA172.JSON',
					'META 7/TAREFA18/TAREFA181.JSON',
					'META 7/TAREFA19/TAREFA191.JSON',
					'META 7/TAREFA19/TAREFA192.JSON',
					'META 7/TAREFA20/TAREFA201.JSON',
					'META 7/TAREFA20/TAREFA202.JSON',
					'META 7/TAREFA21/TAREFA211.JSON',
					'META 7/TAREFA22/TAREFA221.JSON',
					'META 7/TAREFA22/TAREFA222.JSON',
					'META 7/TAREFAC01/TAREFAC011.JSON',
					'META 7/TAREFAC01/TAREFAC012.JSON',
					'META 7/TAREFAC02/TAREFAC021.JSON',
					'META 7/TAREFAC02/TAREFAC022.JSON',
				],
			},
			{
				meta: 'META 8',
				metaPdf: 'META 8/Meta 8 - Pos-Edital Revalida INEP 20231.pdf',
				listContent: [
					'TAREFA01',
					'TAREFA02',
					'TAREFA03',
					'TAREFA04',
					'TAREFA05',
					'TAREFA06',
					'TAREFA07',
					'TAREFA08',
					'TAREFA09',
					'TAREFA10',
					'TAREFA11',
					'TAREFA12',
					'TAREFA13',
					'TAREFA14',
					'TAREFA15',
					'TAREFA16',
					'TAREFA17',
					'TAREFA18',
					'TAREFAC01',
					'TAREFAC02',
				],
				listFiles: [
					'META 8/TAREFA01/TAREFA011.JSON',
					'META 8/TAREFA01/TAREFA012.JSON',
					'META 8/TAREFA02/TAREFA021.JSON',
					'META 8/TAREFA02/TAREFA022.JSON',
					'META 8/TAREFA03/TAREFA031.JSON',
					'META 8/TAREFA03/TAREFA032.JSON',
					'META 8/TAREFA04/TAREFA041.JSON',
					'META 8/TAREFA04/TAREFA042.JSON',
					'META 8/TAREFA05/TAREFA051.JSON',
					'META 8/TAREFA05/TAREFA052.JSON',
					'META 8/TAREFA06/TAREFA061.JSON',
					'META 8/TAREFA06/TAREFA062.JSON',
					'META 8/TAREFA07/TAREFA071.JSON',
					'META 8/TAREFA07/TAREFA072.JSON',
					'META 8/TAREFA08/TAREFA081.JSON',
					'META 8/TAREFA08/TAREFA082.JSON',
					'META 8/TAREFA09/TAREFA091.JSON',
					'META 8/TAREFA09/TAREFA092.JSON',
					'META 8/TAREFA10/TAREFA101.JSON',
					'META 8/TAREFA10/TAREFA102.JSON',
					'META 8/TAREFA11/TAREFA111.JSON',
					'META 8/TAREFA11/TAREFA112.JSON',
					'META 8/TAREFA12/TAREFA121.JSON',
					'META 8/TAREFA12/TAREFA122.JSON',
					'META 8/TAREFA13/TAREFA131.JSON',
					'META 8/TAREFA13/TAREFA132.JSON',
					'META 8/TAREFA14/TAREFA141.JSON',
					'META 8/TAREFA14/TAREFA142.JSON',
					'META 8/TAREFA15/TAREFA151.JSON',
					'META 8/TAREFA15/TAREFA152.JSON',
					'META 8/TAREFA16/TAREFA161.JSON',
					'META 8/TAREFA16/TAREFA162.JSON',
					'META 8/TAREFA17/TAREFA171.JSON',
					'META 8/TAREFA18/TAREFA181.JSON',
					'META 8/TAREFAC01/TAREFAC011.JSON',
					'META 8/TAREFAC02/TAREFAC021.JSON',
				],
			},
			{
				meta: 'META 9',
				metaPdf: 'META 9/Meta 9 - Pos-Edital Revalida.pdf',
				listContent: [
					'TAREFA01',
					'TAREFA02',
					'TAREFA03',
					'TAREFA04',
					'TAREFA05',
					'TAREFA06',
					'TAREFA07',
					'TAREFA08',
					'TAREFA09',
					'TAREFA10',
					'TAREFA11',
					'TAREFA12',
					'TAREFA13',
					'TAREFA14',
					'TAREFA15',
					'TAREFA16',
					'TAREFA17',
					'TAREFA18',
					'TAREFA19',
					'TAREFA20',
				],
				listFiles: [
					'META 9/TAREFA01/TAREFA011.JSON',
					'META 9/TAREFA01/TAREFA012.JSON',
					'META 9/TAREFA02/TAREFA021.JSON',
					'META 9/TAREFA02/TAREFA022.JSON',
					'META 9/TAREFA03/TAREFA031.JSON',
					'META 9/TAREFA03/TAREFA032.JSON',
					'META 9/TAREFA04/TAREFA041.JSON',
					'META 9/TAREFA04/TAREFA042.JSON',
					'META 9/TAREFA05/TAREFA051.JSON',
					'META 9/TAREFA05/TAREFA052.JSON',
					'META 9/TAREFA06/TAREFA061.JSON',
					'META 9/TAREFA06/TAREFA062.JSON',
					'META 9/TAREFA07/TAREFA071.JSON',
					'META 9/TAREFA07/TAREFA072.JSON',
					'META 9/TAREFA08/TAREFA081.JSON',
					'META 9/TAREFA08/TAREFA082.JSON',
					'META 9/TAREFA09/TAREFA091.JSON',
					'META 9/TAREFA09/TAREFA092.JSON',
					'META 9/TAREFA10/TAREFA101.JSON',
					'META 9/TAREFA10/TAREFA102.JSON',
					'META 9/TAREFA11/TAREFA111.JSON',
					'META 9/TAREFA11/TAREFA112.JSON',
					'META 9/TAREFA12/TAREFA121.JSON',
					'META 9/TAREFA12/TAREFA122.JSON',
					'META 9/TAREFA13/TAREFA131.JSON',
					'META 9/TAREFA14/TAREFA141.JSON',
					'META 9/TAREFA15/TAREFA151.JSON',
					'META 9/TAREFA16/TAREFA161.JSON',
					'META 9/TAREFA17/TAREFA171.JSON',
					'META 9/TAREFA18/TAREFA181.JSON',
					'META 9/TAREFA19/TAREFA191.JSON',
					'META 9/TAREFA20/TAREFA201.JSON',
				],
			},
			{
				meta: 'SIMULADOS ESPECIALIDAD',
				//metaPdf: "META 9/Meta 9 - Pós-Edital Revalida.pdf",
				listContent: [
					'ARRITMIA E PCR',
					'BRUE',
					'CARDIOPATIA CONGENITA',
					'CHOQUE EM PEDIATRIA',
					'CORPO ESTRANHO',
					'DISTURBIOS RESPIRATORIOS',
					'FEBRE MACULOSA',
					'HANTAVIRUS',
					'HIPOGLICEMIA',
					'SEPSE NEONATAL',
				],
				listFiles: [
					'SIMULADOS ESPECIALIDAD/ARRITMIA E PCR/ARRITMIA E PCR.JSON',
					'SIMULADOS ESPECIALIDAD/BRUE/BRUE.JSON',
					'SIMULADOS ESPECIALIDAD/CARDIOPATIA CONGENITA/CARDIOPATIA CONGENITA.JSON',
					'SIMULADOS ESPECIALIDAD/CHOQUE EM PEDIATRIA/CHOQUE EM PEDIATRIA.JSON',
					'SIMULADOS ESPECIALIDAD/CORPO ESTRANHO/CORPO ESTRANHO.JSON',
					'SIMULADOS ESPECIALIDAD/DISTURBIOS RESPIRATORIOS/DISTURBIOS RESPIRATORIOS.JSON',
					'SIMULADOS ESPECIALIDAD/FEBRE MACULOSA/FEBRE MACULOSA.JSON',
					'SIMULADOS ESPECIALIDAD/HANTAVIRUS/HANTAVIRUS.JSON',
					'SIMULADOS ESPECIALIDAD/HIPOGLICEMIA/HIPOGLICEMIA.JSON',
					'SIMULADOS ESPECIALIDAD/SEPSE NEONATAL/SEPSE NEONATAL.JSON',
				],
			},
			{
				meta: 'SIMULADOS REFORCO',
				//metaPdf: "SIMULADOS REFORCO/SIMULADO1/SIMULADO01.pdf",
				listContent: ['SIMULADO1', 'SIMULADO2', 'SIMULADO3', 'SIMULADO4', 'SIMULADO5', 'SIMULADO6', 'SIMULADO7'],
				listFiles: [
					'SIMULADOS REFORCO/SIMULADO1/S011.JSON',
					'SIMULADOS REFORCO/SIMULADO1/S012.JSON',
					'SIMULADOS REFORCO/SIMULADO2/S021.JSON',
					'SIMULADOS REFORCO/SIMULADO2/S022.JSON',
					'SIMULADOS REFORCO/SIMULADO3/S031.JSON',
					'SIMULADOS REFORCO/SIMULADO3/S032.JSON',
					'SIMULADOS REFORCO/SIMULADO4/S041.JSON',
					'SIMULADOS REFORCO/SIMULADO4/S042.JSON',
					'SIMULADOS REFORCO/SIMULADO5/S051.JSON',
					'SIMULADOS REFORCO/SIMULADO5/S052.JSON',
					'SIMULADOS REFORCO/SIMULADO6/S061.JSON',
					'SIMULADOS REFORCO/SIMULADO6/S062.JSON',
					'SIMULADOS REFORCO/SIMULADO7/S071.JSON',
					'SIMULADOS REFORCO/SIMULADO7/S072.JSON',
				],
			},
		];
	}

	ngAfterViewInit(): void {
		this.videoElement = this.videoplayer.nativeElement;
	}

	readFileContent(file: string): void {
		this.httpClient.get('https://course-storage.netlify.app/POS_EDITAL/' + file).subscribe((jsonData: any) => {
			this.questionsListData = jsonData.data;
			if (this.questionsListData) {
				this.questionsListData.forEach((question) => {
					const questionOptions: any[] = [];
					if (question.answer_type === 'MULTIPLE_CHOICE') {
						question.alternatives.forEach((alternative: any) => {
							const alternativeData: any = {
								correct: alternative.correct ? alternative.correct : question.position == alternative.position,
								text: alternative.sanitized_body ? alternative.sanitized_body : alternative.body,
								comment: alternative.solution ? alternative.solution.sanitized_complete : '',
							};

							questionOptions.push(alternativeData);
						});
					}

					const questionData = {
						title: question.topics[0]?.name,
						subtitle: question.topics[1]?.name,
						answer_type: question.answer_type,
						questionText: question.statement_text,
						options: questionOptions,
						solution: question.solution.sanitized_complete,
						has_video_solution: question.has_video_solution,
						solution_video_url: question.solution_video_url,
					};

					this.selectedOptions.push(null);
					this.textCheckButtons.push('Verifique a resposta');
					this.questionsListFormatted.push(questionData);
				});
			}
		});
	}

	showQuestionsList(meta: string, content: string, pos: number): void {
		const listContent: any[] = [];
		this.questionsListFormatted = [];
		this.jsonFiles.forEach((json) => {
			json.listFiles.map((file: string) => {
				if (file.includes(meta) && file.includes(content)) {
					listContent.push(file);
				}
			});
		});
		this.activeMeta = meta;
		this.activeContent = content;

		this.activeState[pos] = false;
		listContent.forEach((file) => this.readFileContent(file));
	}

	consecutiveLetters(n: number): string {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		let letter = '';

		for (let i = 0; i <= n; i++) {
			letter = alphabet.charAt(n);
		}

		return letter;
	}

	checkAnswer(question: number): void {
		const optionQuestion = this.selectedOptions[question];
		this.activeQuestion = question;
		this.activeOptionQuestion = optionQuestion;
		if (optionQuestion) {
			if (optionQuestion.correct) {
				this.textCheckButtons[question] = 'Resposta Correta';
			} else {
				this.textCheckButtons[question] = 'Resposta Incorreta';
			}
		}
	}

	viewDiscursiveAnswer(question: number): void {
		this.activeQuestion = question;
		this.discursiveVisible = true;
	}

	showVideo(videoUrl: string): void {
		this.actualVideoUrl = videoUrl;
		this.videoElement.src = this.actualVideoUrl;
		this.videoElement.currentTime = 0;
		this.videoElement.autoplay = true;
		this.showVideoQuestion = true;
	}

	resetVideo(): void {
		this.actualVideoUrl = '';
	}
}
