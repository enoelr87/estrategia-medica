import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalRectContentListComponent } from './final-rect-content-list.component';

describe('FinalRectContentListComponent', () => {
  let component: FinalRectContentListComponent;
  let fixture: ComponentFixture<FinalRectContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalRectContentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalRectContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
