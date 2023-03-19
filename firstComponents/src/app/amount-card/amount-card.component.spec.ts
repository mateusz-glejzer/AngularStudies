import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountCardComponent } from './amount-card.component';

describe('AmountCardComponent', () => {
  let component: AmountCardComponent;
  let fixture: ComponentFixture<AmountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
