import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLib } from './training-lib';

describe('TrainingLib', () => {
  let component: TrainingLib;
  let fixture: ComponentFixture<TrainingLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
