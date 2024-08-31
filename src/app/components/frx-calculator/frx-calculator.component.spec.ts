import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrxCalculatorComponent } from './frx-calculator.component';

describe('FrxCalculatorComponent', () => {
  let component: FrxCalculatorComponent;
  let fixture: ComponentFixture<FrxCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrxCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
