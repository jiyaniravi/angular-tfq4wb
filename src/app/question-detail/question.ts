export class Question {
    id: number;
    question: string;
    options: Array<string>;
    answer: string;
    constructor(id: number, question: string, options: Array<string>, answer: string) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}