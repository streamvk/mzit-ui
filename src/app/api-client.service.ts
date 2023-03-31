import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './entity/student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  apiUrl='http://localhost:8080/mindzoneitsolutions/app/v1';

  constructor(private httpClient: HttpClient) { }



  public getById(studentId:number):Observable<any> {

    return this.httpClient.get(`${this.apiUrl}/students/${studentId}`);
  }

  public getAll():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/all`);
  }

  public register(student:Student):Observable<any>{
    console.log(student);
    return this.httpClient.post(`${this.apiUrl}/students/`,student);
  }
  public deleteById(studentId:number):Observable<any>{
    console.log('api service'+studentId)
    return this.httpClient.delete(`${this.apiUrl}/students/${studentId}`);
  }

  public update(student:Student):Observable<any>{
   return this.httpClient.put(`${this.apiUrl}/students`,student);
  }
  

}
