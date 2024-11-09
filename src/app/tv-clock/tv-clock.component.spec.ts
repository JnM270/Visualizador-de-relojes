import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvClockComponent } from './tv-clock.component';

describe('TvClockComponent', () => {
  let component: TvClockComponent;
  let fixture: ComponentFixture<TvClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
