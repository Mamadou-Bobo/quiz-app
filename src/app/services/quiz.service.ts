import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  isClicked: boolean = false;

  isClickedSubject = new Subject<boolean>();

  quizCategorie: any = [
    {
      name: 'Any Category'
    },
    {
      name: 'General Knowledge'
    },
    {
      name: 'Entertainment: Books'
    },
    {
      name: 'Entertainment: Film'
    },
    {
      name: 'Entertainment: Music'
    },
    {
      name: 'Entertainment: Musical Theatres'
    },
    {
      name: 'Entertainment: Television'
    },
    {
      name: 'Entertainment: Video Games'
    },
    {
      name: 'Entertainment: Board Games'
    },
    {
      name: 'Science & Nature'
    },
    {
      name: 'Science: Computers'
    },
    {
      name: 'Science: Mathematics'
    },
    {
      name: 'Mythology'
    },
    {
      name: 'Sports'
    },
    {
      name: 'Geography'
    },
    {
      name: 'History'
    },
    {
      name: 'Politics'
    },
    {
      name: 'Art'
    },
    {
      name: 'Celebrities'
    },
    {
      name: 'Animals'
    },
    {
      name: 'Vehicles'
    },
    {
      name: 'Entertainment: Comics'
    },
    {
      name: 'Science: Gadgets'
    },
    {
      name: 'Entertainment: Japanese Anime & Manga'
    },
    {
      name: 'Entertainment: Cartoon & Animations'
    },

  ] 

  constructor() { }

  emitClicked(): void {
    this.isClickedSubject.next(this.isClicked);
  }

}
