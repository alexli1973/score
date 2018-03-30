import {Component, OnInit} from '@angular/core';
import {Quiz} from '../quiz.model';
import {QuizService} from '../shared/quiz.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  quizes: Quiz[];
  correct = null;
  score = 0;

  constructor(private quizService: QuizService, private router: Router) {

  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.quizService.getQuiz()
      .subscribe(quizes => {
        this.quizes = quizes;
        this.quiz = quizes[0];
      } );
  }

  prev() {
    let ix = this.quizes.indexOf(this.quiz) - 1;
    if (ix <= 0) {
      ix = 0;
    }
    this.quiz = this.quizes[ix];
     // this.checkAnswer(answer);
  }


  done(value) {
    if (value === this.quiz.correct) {
      console.log(value);
      console.log('correct');
      this.score += 10;
    }
    console.log(this.score);
    const score = this.score;
    this.quizService.score.next(score);
    this.router.navigate(['result']);
  }


  next(value) {
      const ix = 1 + this.quizes.indexOf(this.quiz);
      if (ix >= this.quizes.length) {
       // ix = 0;
        //this.router.navigate(['result']);
      }
      this.quiz = this.quizes[ix];
      //this.quizService.score.next(this.score);

  }

  checkAnswer(answer) {
      console.log(answer);
    if (answer === this.quiz.correct) {
      console.log(answer);
      console.log('correct');
      const score = this.score += 10;
    }
  }

}
