import { Component, OnInit } from '@angular/core';
import {QuizService} from "../shared/quiz.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score = 0;
  subscription: Subscription;

  constructor(private quizService: QuizService) {
    // this.quizService.score.subscribe(
    //   (score) => {
    //     this.score = score;
    //   }
    // );
    this.subscription = this.quizService.score.subscribe(
      (score) => {
        this.score = score;
      }
    )
  }

  ngOnInit() {
    this.quizService.score.subscribe(
      (score) => {
        this.score = score;
      }
    )

  }

}
