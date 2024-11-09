import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LbarClockComponent } from './lbar-clock.component';

describe('LbarClockComponent', () => {
  let component: LbarClockComponent;
  let fixture: ComponentFixture<LbarClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LbarClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LbarClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
