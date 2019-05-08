import { Component } from '@angular/core';
import { Question } from "./question";
import {Router, ActivatedRoute} from '@angular/router';
import {Globals} from '../global/globals';
import { CommonService } from '../global/common.service';
import { SelectedOption } from './selected-option';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent{
  question: Question = new Question(-1,'Quiz not started', null, null);
  selectedOption: SelectedOption;
  selectedAnswer: string;
  currentQuestionIndex: number;
  router: Router;
  btnPrevLabel: string = 'Previous';
  btnNextLabel: string = 'Next';
  constructor(route: ActivatedRoute, router: Router,  private globals: Globals, private commonService: CommonService) {
    this.router = router;
    route.params.subscribe(val => {
      this.currentQuestionIndex = (route.snapshot.params['id'])/1;
      this.question = this.globals.quizArray[this.currentQuestionIndex];
      if(this.globals.answerArray[this.currentQuestionIndex]){
        this.selectedAnswer = this.globals.answerArray[this.currentQuestionIndex].answer;
      }
      if(this.globals.quizArray.length-1 <= this.currentQuestionIndex){
        this.btnNextLabel = 'Submit';
      }else{
        this.btnNextLabel = 'Next';
      }
    });
  } 
  
  onSelectionChange(option) {
        this.selectedAnswer = option;
  };

  previous(){
    if(this.currentQuestionIndex <= 0){
      alert("Kindly complete the quiz! You can't go back");
      return;
    }
    this.globals.answerArray.splice(this.currentQuestionIndex,1,new SelectedOption(this.currentQuestionIndex,this.selectedAnswer));
    this.selectedAnswer = '';
    if(0 < this.currentQuestionIndex){
      this.router.navigate(['/question/', --this.currentQuestionIndex]);
    }


  };

  next(){

    if(this.commonService.isUndefinedNullEmptyString(this.selectedAnswer)){
      alert('Please select any option!');
      return false;
    }
    
    this.globals.answerArray.splice(this.currentQuestionIndex,1,new SelectedOption(this.currentQuestionIndex,this.selectedAnswer));
    this.selectedAnswer = '';
    if(this.globals.quizArray.length-1 > this.currentQuestionIndex){
      this.router.navigate(['/question/', ++this.currentQuestionIndex]);
    }else{
      for(var i=0; i< this.globals.answerArray; i++){
        console.log(this.globals.answerArray[i]);
      }
      this.router.navigate(['/result']);
    }
  };
}  