import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Student } from '../entity/student';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  student: Student = new Student();
  message: string;
  studentId: number;

  constructor(private apiService: ApiClientService,
              private router: Router,
              private route: ActivatedRoute){}
  ngOnInit() {
    this.student = new Student();
    console.log('In side ngOnInit of update component..!!')
    this.studentId = this.route.snapshot.params['studentId']
    let response = this.apiService.getById(this.studentId);
    response.subscribe(data=>{ 
      console.log(data)
    this.student=data;
    
    });
    
  }

  update(student:Student){

    let response = this.apiService.update(student);
    response.subscribe(data=>{

      this.student=data;

      if(response !=null){
        this.message= 'Student ' +this.student.firstName+' Details Successfully Updated..!!';
      }
      this.student = new Student();

    });



  }

  home(){
    this.router.navigate(['home']);
  }

}
