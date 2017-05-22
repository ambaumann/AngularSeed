import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './pages/example.component';

const routes: Routes = [
  {path: 'example', component: ExampleComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExampleComponent]
})
export class ExampleModule { }
