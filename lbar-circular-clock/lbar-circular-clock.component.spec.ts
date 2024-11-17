import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LbarCircularClockComponent } from './lbar-circular-clock.component';

describe('LbarCircularClockComponent', () => {
  let component: LbarCircularClockComponent;
  let fixture: ComponentFixture<LbarCircularClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LbarCircularClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LbarCircularClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
