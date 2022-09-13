import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.css']
})
export class AddQuestionModalComponent implements OnInit {
  @Output() questionSubmit = new EventEmitter<any>();

  closeResult: string = '';
  select: string = '';

  newQuestionForm = this.fb.group({
    selectedValue: ['paragraph'],
    questionContent: "",
    aliases: this.fb.array([
      this.fb.control('')
    ]),
    otherAnswer: false,
    required: false,
  });
  public listType = [
    { name: 'paragraph', value: 'paragraph' },
    { name: 'checkbox', value: 'checkbox' }
  ]

  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  get aliases() {
    return this.newQuestionForm.get('aliases') as FormArray;
  }

  onSubmit() { 
    this.questionSubmit.emit(this.newQuestionForm.value)
    console.log(this.newQuestionForm.value);
  }

  onSelectChange(event: any) {
    console.log(event.target.value);
    this.newQuestionForm.patchValue({
      selectedValue: event.target.value,
    });
    this.select = event.target.value;
    // let selectValue = this.selectValue.value;
    //   console.log('Profile Changed: ' + selectValue);
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
