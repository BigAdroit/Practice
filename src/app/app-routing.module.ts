import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { ButtonComponent } from './button/button.component';
import { FormsComponent } from './forms/forms.component';
import { DetailsComponent } from './details/details.component'
import { FormTestComponent } from './form-test/form-test.component';


const routes: Routes = [
  {
    path: 'practice', 
    component: PracticeComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: "form-valid",
    component: FormTestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
