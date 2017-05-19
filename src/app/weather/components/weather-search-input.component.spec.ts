import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSearchInputComponent } from './weather-search-input.component';

describe('WeatherSearchInputComponent', () => {
  let component: WeatherSearchInputComponent;
  let fixture: ComponentFixture<WeatherSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
