import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AddQuestionModalComponent } from './component/add-question-modal/add-question-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewAnswersComponent } from './review-answers/review-answers.component';
@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    AddQuestionModalComponent,
    ReviewAnswersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
