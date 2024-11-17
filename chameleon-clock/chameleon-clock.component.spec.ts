import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChameleonClockComponent } from './chameleon-clock.component';

describe('FruitClockComponent', () => {
  let component: ChameleonClockComponent;
  let fixture: ComponentFixture<ChameleonClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChameleonClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChameleonClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
