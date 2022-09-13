import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListQuestion } from 'src/mock-data';

@Component({
  selector: 'app-review-answers',
  templateUrl: './review-answers.component.html',
  styleUrls: ['./review-answers.component.css']
})
export class ReviewAnswersComponent implements OnInit {

  listQuestion: any = ListQuestion;
  constructor(private router: Router) {


  }

  ngOnInit(): void {
    const data: any = localStorage.getItem('listQuestion');
    this.listQuestion = JSON.parse(data)
    // console.log("ssss", data);

  }

  goBack() {
    this.router.navigate(['/form/builder']);

  }

}
