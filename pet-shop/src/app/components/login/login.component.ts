import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserAuth } from '../../models/userauth';
import { SecurityServiceService } from '../../services/security-service.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { TrackerError } from 'src/app/models/traker-error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User = new User();
  private userAuthObject: UserAuth;
  private returnUrl: string;
  private shoppingCartUrl: string
  constructor(private securityservice: SecurityServiceService, private router: Router, private route: ActivatedRoute) {

  }

  logIn(loginForm: NgForm) {

    this.securityservice.login(this.user).subscribe(
      () => {

        this.userAuthObject = this.securityservice.userAuthObject;


        if (this.userAuthObject.isAuthenticated) {
          if (this.returnUrl) {
            this.router.navigateByUrl(this.returnUrl);

          } else if (this.shoppingCartUrl) {
            this.router.navigateByUrl(this.shoppingCartUrl)
          } else {
            this.router.navigate(['/home'])

          }

        } else {
          this.userAuthObject = new UserAuth()
         
        }

        loginForm.reset()

      }
    ),
      (error: TrackerError) => console.log(error.friendlyMessage);


  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    this.shoppingCartUrl = this.route.snapshot.queryParamMap.get("shoppingCartUrl");
  }

}
