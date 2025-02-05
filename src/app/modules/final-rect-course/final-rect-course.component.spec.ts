import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalRectCourseComponent } from './final-rect-course.component';

describe('FinalRectCourseComponent', () => {
  let component: FinalRectCourseComponent;
  let fixture: ComponentFixture<FinalRectCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalRectCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalRectCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
