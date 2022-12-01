import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './service/employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeComponent,
    AddComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
