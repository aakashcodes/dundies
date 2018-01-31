import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string ="";
  constructor(private api: ApiService, private router:Router) {

  }

  ngOnInit() {
  }

  verifyEmail():void {
    if(this.email!='')
    {
      this.api.getUser().subscribe((data)=> {
      data.forEach(user => {
        if(user.email.toLowerCase() === this.email.toLowerCase())
        {
          localStorage.setItem('loggedInUser', user);
          this.router.navigate(['/profile/1']);
        }
      })
      }, (error) => {})
    }
  }

}
