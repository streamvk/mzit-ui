import { Component, OnInit } from '@angular/core';
import { Student } from '../entity/student';
import { Router } from '@angular/router';

import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  students: any;
  student: Student = new Student();
  message: string;

  constructor(private apiService: ApiClientService,
    private router: Router
    ){}

  ngOnInit(): void {}

  register(student:Student){

    let response = this.apiService.register(student);

    response.subscribe(data=>{
     
      this.student = data;
      if(data !=null){

        this.message = 'Student '+this.student.firstName+ ' added successfully..!!'
      }
      this.student = new Student();
    })
  }

  home(){
    this.router.navigate(['home']);
  }

}
