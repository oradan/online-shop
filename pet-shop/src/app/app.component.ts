import { Component } from '@angular/core';
import { SecurityServiceService } from './services/security-service.service';
import { UserAuth } from './models/userauth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pet-shop';
  userAuthObject:UserAuth=null

constructor(private securityService:SecurityServiceService,private router: Router){
 this.userAuthObject=this.securityService.userAuthObject
 console.log(this.securityService.userAuthObject)
}

logout(){
  this.securityService.logOut()
  this.router.navigate(['/home'])
}
}
