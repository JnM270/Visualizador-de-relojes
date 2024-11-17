import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleClockComponent } from './bubble-clock.component';

describe('BubbleClockComponent', () => {
  let component: BubbleClockComponent;
  let fixture: ComponentFixture<BubbleClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
