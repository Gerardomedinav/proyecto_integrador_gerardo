import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumPdfComponent } from './curriculum-pdf.component';

describe('CurriculumPdfComponent', () => {
  let component: CurriculumPdfComponent;
  let fixture: ComponentFixture<CurriculumPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
