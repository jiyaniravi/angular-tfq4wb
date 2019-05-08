import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { QuestionDetailComponent } from "./question-detail/question-detail.component"; 
import { ResultDetailComponent } from './result-detail/result-detail.component';

const routes: Routes = [{path: '', component: QuizComponent},
                        {path: 'question/:id', component: QuestionDetailComponent},
                        {path: 'result', component: ResultDetailComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }