import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalOnlineCourseComponent } from './practical-online-course.component';

describe('PracticalOnlineCourseComponent', () => {
  let component: PracticalOnlineCourseComponent;
  let fixture: ComponentFixture<PracticalOnlineCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticalOnlineCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalOnlineCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
