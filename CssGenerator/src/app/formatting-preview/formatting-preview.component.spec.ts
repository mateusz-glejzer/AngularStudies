import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattingPreviewComponent } from './formatting-preview.component';

describe('FormattingPreviewComponent', () => {
  let component: FormattingPreviewComponent;
  let fixture: ComponentFixture<FormattingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormattingPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormattingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
