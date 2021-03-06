import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() link: string = "level";
  @Input() isClicked: boolean = false;
  @Input() title: string = "Next";
  clickSubscription: Subscription | undefined;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.clickSubscription = this.quizService.isClickedSubject.subscribe(
      (value) => {
        this.isClicked = value;
      }
    );
  }



}
