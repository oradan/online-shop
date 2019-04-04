import { Component } from '@angular/core';
import { SecurityServiceService } from './services/security-service.service';
import { UserAuth } from './models/userauth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pet-shop';
  userAuthObject:UserAuth=null

constructor(private securityService:SecurityServiceService){
 this.userAuthObject=this.securityService.userAuthObject
 console.log(this.securityService.userAuthObject)
}

logout(){
  this.securityService.logOut()
}
}
