import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdTabsModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule
  ]
})
export class SharedModule { }
