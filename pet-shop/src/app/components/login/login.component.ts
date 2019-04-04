import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserAuth } from '../../models/userauth';
import { SecurityServiceService } from '../../services/security-service.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router, NavigationEnd, RoutesRecognized } from '../../../../node_modules/@angular/router';
import { filter, pairwise } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User=new User();
  userAuthObject : UserAuth=null
  constructor(private securityservice: SecurityServiceService, private router: Router) { }

  logIn(loginForm: NgForm){
    this.securityservice.login(this.user).subscribe(
     (data:UserAuth)=>{
       
       this.userAuthObject=data
       console.log(this.userAuthObject)
    },
    ()=>this.userAuthObject= new UserAuth()
    )
  }

  ngOnInit() {
  this.router.events
  .pipe(
    filter(e=>e instanceof RoutesRecognized),
    pairwise()
  ).subscribe(
    (e:any)=>console.log(e[0].urlAfterRedirects)
  )
    // this.user.userName="olgaradan";
    // this.user.password="olgaradan"
  }

}
