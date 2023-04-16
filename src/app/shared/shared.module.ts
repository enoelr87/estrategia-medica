import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DataViewModule,
    RatingModule,
    TagModule,
    ButtonModule,
    SelectButtonModule,
    DropdownModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DataViewModule,
    RatingModule,
    TagModule,
    ButtonModule,
    SelectButtonModule,
    DropdownModule
  ]
})
export class SharedModule { }
