import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseList } from './exercise-list';

describe('ExerciseList', () => {
  let component: ExerciseList;
  let fixture: ComponentFixture<ExerciseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
