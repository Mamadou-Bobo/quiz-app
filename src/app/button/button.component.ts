import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  isClicked: boolean = false;
  clickSubscription: Subscription | undefined;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.clickSubscription = this.quizService.isClickedSubject.subscribe(
      (value) => {
        this.isClicked = value;
      }
    )
  }



}
