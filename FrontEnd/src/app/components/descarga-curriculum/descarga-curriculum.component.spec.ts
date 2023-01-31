import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaCurriculumComponent } from './descarga-curriculum.component';

describe('DescargaCurriculumComponent', () => {
  let component: DescargaCurriculumComponent;
  let fixture: ComponentFixture<DescargaCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargaCurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescargaCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
