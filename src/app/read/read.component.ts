import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Student } from '../entity/student';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{

  student: Student = new Student();
  students: any;
  message: string;

  constructor(private apiService: ApiClientService,
              private router: Router
    ){}
  ngOnInit():void {
    this.readAll();
  }

  readById(studentId:number){

    this.apiService.getById(studentId);
  }

  readAll(){
    let response =this.apiService.getAll();
    response.subscribe((data) => {
      this.students = data;
    });
  }

  deleteById(studentId:number){
    this.apiService.deleteById(studentId).subscribe();
    this.ngOnInit();
    alert()
  }

  update(studentId:number){
    this.router.navigate(['update',studentId]);
  }

  home(){
    this.router.navigate(['home']);
  }

}
