import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  isClicked: boolean = false;

  constructor(private quizService: QuizService,
              private router: Router) { }

  ngOnInit(): void {
    this.isClicked = true;
    
    console.log(this.quizService.category);
    console.log(this.quizService.difficulty);

    this.quizService.getQuestion(this.quizService.category, this.quizService.difficulty)
    .subscribe((data: any) =>  {
      console.log(data.results);
      if(data.results.length === 0) {
        // console.log("vide");
        this.router.navigate(['/']);
      }
    });

  }

}
