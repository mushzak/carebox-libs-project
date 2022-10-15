import { NgModule } from '@angular/core';
import { CareboxDetailsComponent } from './carebox-details.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SearchPipe} from "./search.pipe";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    CareboxDetailsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    CareboxDetailsComponent
  ]
})
export class CareboxDetailsModule { }
