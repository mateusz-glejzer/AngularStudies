import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedCssBoardComponent } from './generated-css-board.component';

describe('GeneratedCssBoardComponent', () => {
  let component: GeneratedCssBoardComponent;
  let fixture: ComponentFixture<GeneratedCssBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedCssBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedCssBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
