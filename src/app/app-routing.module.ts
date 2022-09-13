import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ReviewAnswersComponent } from './review-answers/review-answers.component';

const routes: Routes = [
  { path: '', redirectTo: '/form/builder', pathMatch: 'full' },
  { path: 'form/builder', component: FormBuilderComponent },
  { path: 'form/answers', component: ReviewAnswersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
