import { TestBed } from '@angular/core/testing';

import { DogBreedService } from './dog-breed.service';

describe('DogBreedService', () => {
  let service: DogBreedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogBreedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
