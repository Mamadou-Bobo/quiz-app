import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { ButtonComponent } from './button/button.component';
import { LevelComponent } from './level/level.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizComponent,
    QuizDetailsComponent,
    ButtonComponent,
    LevelComponent,
    QuestionsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
