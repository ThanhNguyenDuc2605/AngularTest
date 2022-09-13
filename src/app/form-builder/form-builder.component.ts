import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListQuestion } from 'src/mock-data';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  listQuestion = ListQuestion
  constructor(private router: Router) { }

  ngOnInit(): void {
    const data: any = localStorage.getItem('listQuestion');
    this.listQuestion = JSON.parse(data)
  }

  goToReviewAnswer() {
    localStorage.setItem('listQuestion', JSON.stringify(this.listQuestion))
    this.router.navigate(['/form/answers']);
  }

  onQuestionSubmit(data: any) {
    const dataQuestion = {
      question: data.questionContent,
      type: data.selectedValue,
      require: data.required,
      otherAnswer: data.selectedValue === "checkbox" ? data.otherAnswer : null,
      arrayAnswers: data.aliases
    }
    console.log("dataQuestion", dataQuestion);

    this.listQuestion.push(dataQuestion)
  }

}
