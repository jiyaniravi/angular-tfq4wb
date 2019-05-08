import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Globals} from '../global/globals';
import { CommonService } from '../global/common.service';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styles: [`h1 { font-family: Lato; }`],
  styleUrls: ['./result-detail.component.css']
})

export class ResultDetailComponent{
  router: Router;
  finalScore: number = 0;
  constructor(router: Router,  private globals: Globals, private commonService: CommonService) {
    this.calculateScore();
    this.router = router;
  }

  calculateScore(){
    for(let i=0; i<this.globals.quizArray.length; i++){
      if(this.globals.quizArray[i].answer === this.globals.answerArray[i].answer){
        this.finalScore++;
      }
    }
  };

  restartExam(){
    this.finalScore = 0;
    this.globals.answerArray = [];
    this.router.navigate(['/']);
  };

  openProfile(){
    window.open('https://www.linkedin.com/in/ravi-jiyani-22623037/', '_blank');
  };
}  