import { Component } from '@angular/core';
import { DataViewLayoutOptions } from 'primeng/dataview';
import { UserData } from 'src/app/_models';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  user: UserData;

}
