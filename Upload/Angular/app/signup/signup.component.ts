import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  signupUsers: any[] =[];
  signupobj:any ={
    firstName:'',
    address:'',
    contact:'',
    email:'',
    password:''
  };

  constructor() {

  }
  
  ngOnInit(): void {
    
  }
  onsignup(){
    localStorage.setItem('firstname',this.signupobj.firstName);
    localStorage.setItem('lastname',this.signupobj.address);
    localStorage.setItem('lastname',this.signupobj.contact);
    localStorage.setItem('email',this.signupobj.email);
    localStorage.setItem('password',this.signupobj.password);
    alert("user registered successfully...!!!");
    location.href = "/login"
  }
}
