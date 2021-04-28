import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  isClicked: boolean = false;

  isClickedSubject = new Subject<boolean>();

  quizLevel: any = [
    {
      name : 'Any Difficulty',
      value : ''
    },
    {
      name : 'Easy',
      value : 'easy'
    },
    {
      name : 'Medium',
      value : 'medium'
    },
    {
      name : 'Hard',
      value : 'hard'
    }
  ]

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

  category: number | undefined;
  difficulty: string | undefined;

  constructor(private httpClient: HttpClient) { }

  emitClicked(): void {
    this.isClickedSubject.next(this.isClicked);
  }

  getQuestion(category: number | undefined, difficulty: string | undefined): any {
    if(difficulty === "" && category !== 8) {
      return this.httpClient.get("https://opentdb.com/api.php?amount=10&category="+category);
    } else if(difficulty !== "" && category === 8) {
      return this.httpClient.get("https://opentdb.com/api.php?amount=10&difficulty="+difficulty);
    } else if(difficulty === "" && category === 8) {
      return this.httpClient.get("https://opentdb.com/api.php?amount=10");
    }else {
      return this.httpClient.get("https://opentdb.com/api.php?amount=10&category="+category+"&difficulty="+difficulty);
    }
  }

}
