import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  loginObj:any ={
    email:'',
    password:''
  };

  constructor(){}
  ngOnInit(): void {

  }

  onlogin(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    
    if(email==this.loginObj.email && password==this.loginObj.password){
      alert("user login success");
      location.href="/result"
    }
    else{
      alert("Wrong Credentials");
    }
  }
}
