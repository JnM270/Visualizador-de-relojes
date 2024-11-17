import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightClockComponent } from './light-clock.component';

describe('LightClockComponent', () => {
  let component: LightClockComponent;
  let fixture: ComponentFixture<LightClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
