import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionPopupComponent } from './add-question-popup.component';

describe('AddQuestionPopupComponent', () => {
  let component: AddQuestionPopupComponent;
  let fixture: ComponentFixture<AddQuestionPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
