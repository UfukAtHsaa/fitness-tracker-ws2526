import { Component, inject } from '@angular/core';
import { ExerciseLogicService } from '../../../../exercise-lib/src/lib/logic-services/exercise-logic.service'


@Component({
  selector: 'app-exercises',
  imports: [],
  templateUrl: './exercises.html',
  styleUrl: './exercises.scss'
})
export class Exercises {

  public exerciseService = inject(ExerciseLogicService);


}
