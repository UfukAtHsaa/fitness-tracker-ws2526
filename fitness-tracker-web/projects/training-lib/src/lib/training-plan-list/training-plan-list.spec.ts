import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanList } from './training-plan-list';

describe('TrainingPlanList', () => {
  let component: TrainingPlanList;
  let fixture: ComponentFixture<TrainingPlanList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingPlanList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPlanList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
