import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidClockComponent } from './liquid-clock.component';

describe('LiquidClockComponent', () => {
  let component: LiquidClockComponent;
  let fixture: ComponentFixture<LiquidClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquidClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
