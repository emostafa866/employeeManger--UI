import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../components/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl='http://localhost:8080';

  constructor(private http:HttpClient) { }  

  public getAllEmployees(): Observable<Employee[]>{
     return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public getEmployee(id:Number):Observable<Employee>{
    return this.http.get<Employee>(`${this.apiServerUrl}/employee/${id}`);
  }

  public updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`,employee);
  }
  
  public deleteEmployee(id:Number):Observable<Employee>{
    return this.http.delete<Employee>(`${this.apiServerUrl}/employee/${id}`);
  }
}
