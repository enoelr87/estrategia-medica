import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
	user: UserData;

	coursesTypeOptions: any[] = [
		{ label: 'Objetiva e Discursiva', value: 'objetiva' },
		{ label: 'Habilidades Clínicas', value: 'clinica' },
	];
	courseType: string = 'objetiva';

	coursesList: any[] = [];
	coursesListData: any[] = [];

	constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) {
		this.user = this.accountService.userValue;
		this.coursesList = [
			{
				id: '1',
				courseId: '1',
				image: 'https://imgv2-2-f.scribdassets.com/img/document/702484639/original/2a444840ac/1724199338?v=1',
				title: 'Curso Revalida',
				tagline: 'Revalida exclusive',
				description: 'Revalida exclusive',
				routeLink: '/theoretical-course',
				courseType: 'objetiva',
			},
			{
				id: '2',
				courseId: '2',
				image: 'https://imgv2-2-f.scribdassets.com/img/document/702484639/original/2a444840ac/1724199338?v=1',
				title: 'Curso Edital',
				tagline: 'Banco de Questões',
				description: 'Banco de Questões',
				routeLink: '/questions-course',
				courseType: 'objetiva',
			},
			{
				id: '3',
				courseId: '3',
				image: 'https://imgv2-2-f.scribdassets.com/img/document/702484639/original/2a444840ac/1724199338?v=1',
				title: 'Curso Pos Edital',
				tagline: 'Banco de Questões',
				description: 'Banco de Questões',
				routeLink: '/pos-edital-course',
				courseType: 'objetiva',
			},
			{
				id: '4',
				courseId: '4',
				image: 'https://portal.estrategia.com/wp-content/uploads/2024/04/rec6LQgmsTRGF35Eq-7.jpg',
				title: 'Curso de Prova Prática',
				tagline: 'Curso de Prova Prática On-line',
				description: 'Curso de Prova Prática On-line',
				routeLink: '/practical-online-course',
				courseType: 'clinica',
			},
			{
				id: '5',
				courseId: '5',
				image: 'https://hotmart.s3.amazonaws.com/product_pictures/686df5e4-6271-4c95-ba06-98127e477825/CAPAHOT.jpg',
				title: 'Check List Revalida',
				tagline: 'Check List Revalida',
				description: 'Check List Revalida',
				routeLink: '/practical-course',
				courseType: 'clinica',
			},
		];
		this.coursesListData = this.coursesList.filter((course) => course.courseType === this.courseType);
	}

	changeCourseType(event: any): void {
		this.coursesListData = this.coursesList.filter((course) => course.courseType === this.courseType);
	}

	goToCourse(courseUrl: string): void {
		this.router.navigateByUrl(courseUrl);
	}
}
