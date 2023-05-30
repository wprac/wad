import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent {
  constructor(){}
  ngOnInit(): void {
 
  }

  fname = localStorage.getItem('firstname');
  email = localStorage.getItem('email');
  password = localStorage.getItem('password');

  onlogout(){
    localStorage.clear();
  }
  

}
