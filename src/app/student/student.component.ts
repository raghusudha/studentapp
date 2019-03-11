import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { }
  student:any;
  students;


  ngOnInit() {
    this.resetStudent();
    this.students=[{id:'1',firstname:'sudha',lastname:'rani',email:'sudha@gmail.com',phone:'123456'},
    {id:'2',firstname:'raghu',lastname:'byrapuneni',email:'raghu@gmail.com',phone:'123456'},]
  }

  resetStudent(){
    this.student={
     id:'',
     firstname:'',
     lastname:'',
     email:'',
     phone:'',
    
  }
  }
    addStudent(){
      if(this.student.id==0){
      this.student.id=Math.round(Math.random()*10000000);
    }
 this.students.push(this.student);
  this.resetStudent();
  
    }
  updateStudent(){
    var updated=false;
    
    for(var i=0;i<this.students.length;i++){
      if(this.student.id==this.students[i].id){
        updated=true;
        this.students[i]=this.student;
        break;
      }
    }
    if(!updated){
     this.students.push(this.student);
  }
     this.resetStudent();
    
   }
  
  deleteAllStudents(){
    this.students=[];
  }
  deleteStudent(id){
    var list=[];
    for(var i=0;i<this.students.length;i++){
      if(id!=this.students[i].id){
        list.push(this.students[i]);
        }
        
    }
    this.students=list;
  }
  selectStudent(student){
    this.student=student;
  }
  onLogout():void{
    this.router.navigate(['/login']);
  }
    
       }
       
       

