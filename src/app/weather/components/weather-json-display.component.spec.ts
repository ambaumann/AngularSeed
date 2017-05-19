import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherJsonDisplayComponent } from './weather-json-display.component';

describe('WeatherJsonDisplayComponent', () => {
  let component: WeatherJsonDisplayComponent;
  let fixture: ComponentFixture<WeatherJsonDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherJsonDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherJsonDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
