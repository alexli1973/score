
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quiz = [
      { question: "2*2?", answers: ['One', 'Two', 'Three', 'Four'], correct: "Four" },
      { question: "1*1?", answers: ['One', 'Two', 'Three', 'Four'], correct: "One" },
      { question: "1+2?", answers: ['One', 'Two', 'Three', 'Four'], correct: "Three" },
      { question: "1+1?", answers: ['One', 'Two', 'Three', 'Four'], correct: "Two" },

    ];
    return {quiz};
  }
}
