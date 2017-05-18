import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APIModule } from './data-access/api.service.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    APIModule
  ],
  exports: [],
  declarations: []
})
export class CoreModule { }
