import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from './carousel/carousel.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemsComponent } from './task-items/task-items.component';
import { PracticeComponent } from './practice/practice.component';
import { HeaderService } from './header.service';
import { FormsComponent } from './forms/forms.component';
import { DetailsComponent } from './details/details.component';
import { FormTestComponent } from './form-test/form-test.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemsComponent,
    PracticeComponent,
    FormsComponent,
    DetailsComponent,
    FormTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [HeaderService, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }