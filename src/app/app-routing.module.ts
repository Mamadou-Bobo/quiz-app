import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: QuizComponent},
  {path: 'level', component: LevelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
