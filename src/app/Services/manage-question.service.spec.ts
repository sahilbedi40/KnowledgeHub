import { TestBed, inject } from '@angular/core/testing';

import { ManageQuestionService } from './manage-question.service';

describe('ManageQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageQuestionService]
    });
  });

  it('should be created', inject([ManageQuestionService], (service: ManageQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
