import { TestBed } from '@angular/core/testing';

import { ExerciseData } from './exercise-provider';

describe('ExerciseData', () => {
  let service: ExerciseData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
