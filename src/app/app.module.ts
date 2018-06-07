import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { CreateDepartmentComponent } from './department/create-department.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentFormComponent } from './student/student-form.component';
import { CreateStudentComponent } from './student/create-student.component';
import { LoginComponent } from './login/login.component';
import { DepartmentListComponent } from './department/department-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    CreateDepartmentComponent,
    HomeComponent,
    StudentListComponent,
    StudentFormComponent,
    CreateStudentComponent,
    LoginComponent,
    DepartmentListComponent,
    NotFoundComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'departments', component: DepartmentListComponent},
      {path: 'departments/:id', component: DepartmentComponent},
      {path: 'departments/create', component: CreateDepartmentComponent},
      {path: 'students', component: StudentListComponent},
      {path: 'students/:id', component: StudentFormComponent},
      {path: 'students/create', component: CreateStudentComponent},
      {path: 'login', component: LoginComponent},
      {path: '**', component: NotFoundComponent},
    ])
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
