import { TestBed, inject } from '@angular/core/testing';

import { CategoryTypeService } from './category-type.service';

describe('CategoryTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryTypeService]
    });
  });

  it('should be created', inject([CategoryTypeService], (service: CategoryTypeService) => {
    expect(service).toBeTruthy();
  }));
});
