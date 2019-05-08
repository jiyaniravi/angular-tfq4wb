import { Injectable } from '@angular/core';
import { SelectedOption } from '../question-detail/selected-option';
import QuizData from '../resources/quiz-data.json';

@Injectable()
export class Globals {
  quizArray =  QuizData;
  answerArray = [];  
}