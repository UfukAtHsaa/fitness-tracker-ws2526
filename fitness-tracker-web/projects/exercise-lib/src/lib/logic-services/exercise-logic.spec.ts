import { TestBed } from '@angular/core/testing';

import { ExerciseLogic } from '../exercise-logic';

describe('ExerciseLogic', () => {
  let service: ExerciseLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
