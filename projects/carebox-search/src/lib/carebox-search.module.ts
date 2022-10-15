import { NgModule } from '@angular/core';
import { CareboxSearchComponent } from './carebox-search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CareboxSearchComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [
    CareboxSearchComponent
  ]
})
export class CareboxSearchModule { }
