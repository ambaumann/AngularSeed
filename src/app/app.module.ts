import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { WeatherModule } from './weather/weather.module';

import { AppState, reducer } from './reducers';
export { AppState };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
