import { Component} from '@angular/core';

@Component({
  selector: 'quiz',
  template: `<button class='button' routerLink='/question/0'>{{txtQuizStartBtn}}</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class QuizComponent  {
  txtQuizStartBtn = "Start the Quiz";
}
