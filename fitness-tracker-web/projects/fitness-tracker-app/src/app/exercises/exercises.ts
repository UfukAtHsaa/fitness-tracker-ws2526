import { Component, inject } from '@angular/core';
import { ExerciseLogicService } from '../../../../exercise-lib/src/lib/logic-services/exercise-logic.service'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exercises',
  imports: [CommonModule],
  templateUrl: './exercises.html',
  styleUrl: './exercises.scss'
})
export class Exercises {


  public exerciseService = inject(ExerciseLogicService);
  public name: string = 'name';
  public dateofToday: Date = new Date();

}
