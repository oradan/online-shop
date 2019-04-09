import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserAuth } from '../../models/userauth';
import { SecurityServiceService } from '../../services/security-service.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router, NavigationEnd, RoutesRecognized, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { filter, pairwise } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User=new User();
  private userAuthObject : UserAuth=null;
  private retunnUrl:string;
  constructor(private securityservice: SecurityServiceService, private router: Router, private route: ActivatedRoute) { }

  logIn(loginForm: NgForm){
    this.securityservice.login(this.user).subscribe(
     (data:UserAuth)=>{
       
        this.userAuthObject=data
        if(this.retunnUrl){
        //  var x=
       this.router.navigateByUrl(this.retunnUrl)
        
      //   this.router.navigate(['/add-product'])
      //  console.log( this.retunnUrl)
      //  console.log(typeof(this.retunnUrl)) 
      }
    },
    ()=>this.userAuthObject= new UserAuth()
    )
  }

  ngOnInit() {
  this.retunnUrl=this.route.snapshot.queryParamMap.get('returnUrl')
 
  }

}
