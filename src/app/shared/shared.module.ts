import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdTabsModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule
  ]
})
export class SharedModule { }
