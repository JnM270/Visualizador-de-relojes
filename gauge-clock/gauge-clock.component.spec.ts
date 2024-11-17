import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeClockComponent } from './gauge-clock.component';

describe('GaugeClockComponent', () => {
  let component: GaugeClockComponent;
  let fixture: ComponentFixture<GaugeClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugeClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
