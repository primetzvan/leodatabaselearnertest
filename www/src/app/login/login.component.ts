import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    //Test

    //route to dashboard
    
    //this.router.navigate(['/dashboard']);
  }

}
