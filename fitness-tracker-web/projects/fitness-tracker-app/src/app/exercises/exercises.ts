import { Component, inject } from '@angular/core';
import { ExerciseLogicService } from '../../../../exercise-lib/src/lib/logic-services/exercise-logic.service'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-exercises',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercises.html',
  styleUrl: './exercises.scss'
})
export class Exercises {

  public exerciseService = inject(ExerciseLogicService);
  public name: string = 'name';
  public dateofToday: Date = new Date();

  public exercises: string[] = ['Übung 1', 'Übung 2', 'Übung 3', 'Übung 4'];

  public username: string = 'Hans';

  public hide = false;

  ngOnInit(): void {

    console.log('Das ist ein LOG!')

  }

  public buttonClicked(): void {
    // alert('Click');
    console.log('Click');

    this.username = 'Click';
  }

  public toggleHide(): void {
    this.hide = !this.hide;
  }

}
