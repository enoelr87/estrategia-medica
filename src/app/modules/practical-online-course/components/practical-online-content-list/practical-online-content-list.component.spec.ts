import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalOnlineContentListComponent } from './practical-online-content-list.component';

describe('PracticalOnlineContentListComponent', () => {
  let component: PracticalOnlineContentListComponent;
  let fixture: ComponentFixture<PracticalOnlineContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticalOnlineContentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalOnlineContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
