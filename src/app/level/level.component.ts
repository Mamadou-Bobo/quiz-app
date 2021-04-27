import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  quizLevel: any;
  backLink: string = "";
  nextLink: string = "questions";
  indexArray: Array<number> = [];
  isClicked: boolean = false;
  index: number | undefined;
  clickSubscription: Subscription | undefined;

  isClickSuscriber: boolean = false;

  constructor(public quizService: QuizService) { 
    
  }

  ngOnInit(): void {
    this.quizLevel = this.quizService.quizLevel;
    this.clickSubscription = this.quizService.isClickedSubject.subscribe(
      (value) => {
        this.isClickSuscriber = value;
      }
    );
  }

  setCategoryBackgroundColor(index: number): void {
    // A chaque fois qu'on click sur un élément on met son index dans un tableau
    this.indexArray.push(index);
    
    let element = (<HTMLInputElement>document.getElementById('element'+index));

    // Si on click plus d'une fois sur une même catégorie, on change la couleur on fonction de la couleur actuelle
    if(this.indexArray[0] === this.indexArray[1]) {
      if(element.style.backgroundColor !== 'red') {
        element.style.backgroundColor = 'red';
        element.style.color = '#fff';
        this.quizService.isClicked = true;
      } else {
        element.style.backgroundColor = '#ccc';
        element.style.color = '#000';
        this.quizService.isClicked = false;
      }
    } else if(this.indexArray[0] !== this.indexArray[1]) {
      if(element.style.backgroundColor !== 'red') {
        element.style.backgroundColor = 'red';
        element.style.color = '#fff';
        this.quizService.isClicked = true;
      }
      // Si on click sur une catégorie et qu'on a deux index dans le tableau, on change la couleur de la catégorie précédente
      if(this.indexArray.length > 1) {
        (<HTMLInputElement>document.getElementById('element'+this.indexArray[this.indexArray.length-2])).style.backgroundColor = '#ccc';
        (<HTMLInputElement>document.getElementById('element'+this.indexArray[this.indexArray.length-2])).style.color = '#000';
      } 
    }
    this.quizService.emitClicked();
    // si on a plus de deux valeurs dans le tableau, alors on supprime la première valeur
    if(this.indexArray.length === 2) {
      this.indexArray.shift();
    }
  }

  getCategoryIndex(index: number): void {
    this.isClicked = true;
    index += 8;
    this.index = index;
  }

}
