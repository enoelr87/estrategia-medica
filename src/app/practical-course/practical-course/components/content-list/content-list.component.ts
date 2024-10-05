import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription, map, take, timer } from 'rxjs';
import { UserData } from 'src/app/_models';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  user: UserData;
  items: MenuItem[] | undefined;
  itemsPatientScript: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  activeItemPatientScript: MenuItem | undefined;
  activeOption: number = 0;
  allAreaListData: any;
  allCheckListData: any;
  checkListDataTotal: number = 0;
  loadingAllCheckListData: boolean = true;
  selectedArea: any;
  themeListData: any;
  selectedTheme: any;
  checkListData: any;
  tasks: any;
  exams: any;
  evaluationForms: any;
  countDownChecked: boolean = true;
  secondsLeft: number = 600;

  private countdownSubscription: Subscription | null = null;

  constructor(
    private dataService: DataService
  ) {
    
    this.getAllAreaList();
    this.paginateCheckListData(0, 0, 0);

    /*dataService.getCheckListData(10).subscribe((data) => {
    });*/
  }

  getAllAreaList(): void {
    this.dataService.getAllAreaList().subscribe((data) => {
      this.allAreaListData = data;
    });
  }

  paginateCheckListData(page: number, areaId: number, themeId: number): void {
    this.dataService.getAllCheckList(page, areaId, themeId).subscribe((result) => {
      this.allCheckListData = result.data;
      this.checkListDataTotal = result.count;
      this.loadingAllCheckListData = false;
    });
  }

  ngOnInit() {
    this.items = [
        { label: 'Dados base', icon: 'pi pi-user' },
        { label: 'Roteiro do paciente', icon: 'pi pi-file' },
        { label: 'Instrução para o participante', icon: 'pi pi-list' },
        { label: 'Exames', icon: 'pi pi-list' },
        { label: 'PEP', icon: 'pi pi-list' },
    ];

    this.itemsPatientScript = [
      { label: 'Dados de identificação', icon: 'pi pi-file' },
      { label: 'Roteiro', icon: 'pi pi-file' },
      { label: 'Perguntas', icon: 'pi pi-list' },
    ];

    this.activeItem = this.items[0];
    this.activeItemPatientScript = this.itemsPatientScript[0];
  }

  initCountDown(): void {
    const countdown$ = timer(0, 1000).pipe(
      take(600),
      map(secondsElapsed => 600 - secondsElapsed)
    );

    if(!this.countDownChecked) {
      this.countdownSubscription = countdown$.subscribe(secondsLeft => {
        this.secondsLeft = secondsLeft;
      });
    } else {
      this.stopCountDown();
    }
  }

  stopCountDown(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
      this.countdownSubscription = null;
      this.countDownChecked = true;
    }
  }

  onChangeArea(event: any) {
    this.themeListData = event.value?.themes ?? [];
    this.paginateCheckList(0);
  }

  onChangeTheme() {
    this.paginateCheckList(0);
  }

  onCheckListPageChange(event: any) {
    this.paginateCheckList(event.page);
  }

  paginateCheckList(page: number): void {
    this.loadingAllCheckListData = true;
    const areaId = this.selectedArea?.value ?? 0;
    const themeId = this.selectedTheme?.value ?? 0;
    this.paginateCheckListData(page, areaId, themeId);
  }

  selectCheckList(rowIndex: number): void {
    this.checkListData = this.allCheckListData[rowIndex];
    this.tasks = this.checkListData?.instruction_sheet?.instruction_sheet_tasks;
    this.exams = this.checkListData?.exams;
    this.evaluationForms = this.checkListData?.evaluation_forms;
    this.activeOption = 1;
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

  onActiveItemPatientScriptChange(event: MenuItem) {
    this.activeItemPatientScript = event;
  }

}
