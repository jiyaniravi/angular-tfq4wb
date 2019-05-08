import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { QuizComponent } from './quiz.component';

import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';

import { Globals } from "./global/globals";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, QuizComponent, QuestionDetailComponent, ResultDetailComponent],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }