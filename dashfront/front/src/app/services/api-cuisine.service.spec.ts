import { TestBed } from '@angular/core/testing';

import { ApiCuisineService } from './api-cuisine.service';

describe('ApiCuisineService', () => {
  let service: ApiCuisineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCuisineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
