import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Quiz} from '../quiz.model';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class QuizService {
  score = new BehaviorSubject(0);

  private quizUrl = 'api/quiz';  // URL to web api

  constructor(private http: HttpClient) { }

  getQuiz(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizUrl);
  }

}
