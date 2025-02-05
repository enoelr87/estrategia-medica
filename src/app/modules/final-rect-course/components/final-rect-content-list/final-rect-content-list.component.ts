import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { UserData } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';

@Component({
	selector: 'app-final-rect-content-list',
	templateUrl: './final-rect-content-list.component.html',
	styleUrl: './final-rect-content-list.component.scss',
})
export class FinalRectContentListComponent implements OnInit, AfterViewInit {
	userLogged: UserData;

	httpClient = inject(HttpClient);
	accountService = inject(AccountService);
	finalRectCourseData: any = {};
	finalRectCourseListData: any[] = [];

	documentsListData: any[] = [];
	questionsListData: any[] = [];
	questionsListFormatted: any[] = [];

	questionFileData: string = '';

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

	ngOnInit(): void {
		this.userLogged = this.accountService.userLogged;
		this.readFinalRectContent();
	}

	ngAfterViewInit(): void {
		this.videoElement = this.videoplayer.nativeElement;
	}

	readFinalRectContent(): void {
		this.httpClient.get('assets/json/final-rect-course-content.json').subscribe((jsonData: any) => {
			this.finalRectCourseData = jsonData.data;
			this.finalRectCourseListData = this.finalRectCourseData.toc_data.toc;
		});
	}

	readFinalRectQuestionsList(questionFile: string): void {
		this.httpClient.get('https://course-storage.netlify.app/FINAL_RECT/' + questionFile).subscribe((jsonData: any) => {
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
						solution_video_url: question.video_solution.available_resolutions ? question.video_solution.available_resolutions[0].url : '',
					};

					this.selectedOptions.push(null);
					this.textCheckButtons.push('Verifique a resposta');
					this.questionsListFormatted.push(questionData);
				});
			}
		});
	}

	onTabChange(l: number, event: any): void {
		const content = this.finalRectCourseListData[l].children[0];
		if (event) {
			this.showQuestionsList(content, 0);
		}
	}

	showQuestionsList(content: any, pos: number): void {
		this.documentsListData = content.documents.sort((a, b) => {
			if (a.type === 'video' && b.type !== 'video') return -1;
			if (a.type !== 'video' && b.type === 'video') return 1;
			return a.type.localeCompare(b.type);
		});
		this.questionFileData = content.question_file;
		this.questionsListFormatted = [];
		this.readFinalRectQuestionsList(this.questionFileData);
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
