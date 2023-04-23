import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakturaComponent } from './faktura.component';

describe('FakturaComponent', () => {
  let component: FakturaComponent;
  let fixture: ComponentFixture<FakturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
