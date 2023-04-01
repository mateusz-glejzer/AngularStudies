import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattingTableComponent } from './formatting-table.component';

describe('FormattingTableComponent', () => {
  let component: FormattingTableComponent;
  let fixture: ComponentFixture<FormattingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormattingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormattingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
