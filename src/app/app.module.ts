import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AboutModule } from './about/about.module';
import { ExampleModule } from './example/example.module';
import { WeatherModule } from './weather/weather.module';

import { AppState, reducer } from './reducers';
export { AppState };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{path: '',   redirectTo: '/weather', pathMatch: 'full'}]),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // worth noting that there modules could be async loaded from the router with a bit of tweaking.
    AboutModule,
    ExampleModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
