import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExerciseLogicService {

  public getData(): string {
    return 'Value from ExerciseLogicService +++ HOT RELOAD +++';
  }

}
