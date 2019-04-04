import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { UserAuth } from '../models/userauth';
import { Observable, from, of,} from '../../../node_modules/rxjs';
import { User } from '../models/user';
import { TrackerError } from '../models/traker-error';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {
  userAuthObject:UserAuth= new UserAuth
  constructor(private dataService:DatabaseService) { }

  resetUserAuthObject():void{
    this.userAuthObject.id=null;
    this.userAuthObject.userFullName="";
    this.userAuthObject.userName="";
    this.userAuthObject.password="";
    this.userAuthObject.authToken="";
    this.userAuthObject.isAuthenticated=false;
    this.userAuthObject.canAddProducts=false;
    this.userAuthObject.canDeleteProducts=false;
    this.userAuthObject.canUpdateProducts=false;
    localStorage.removeItem("authToken")
  }

  login(user: User):Observable<UserAuth>{

    this.resetUserAuthObject();

    this.dataService.getAllUserAuth().subscribe(
    (data:UserAuth[])=>{
      data.forEach(element => {
        if((element.userName===user.userName)&&(element.password===user.password)){
         Object.assign(this.userAuthObject,element)
        }
      });

      if(this.userAuthObject.userName!==""){
        localStorage.setItem("authToken",this.userAuthObject.authToken)
      }
      console.log(data)
    },
    (err:TrackerError)=>console.log(err.friendlyMessage)
    )

    
 return of<UserAuth>(this.userAuthObject)
 
  }



  logOut():void{
    this.resetUserAuthObject()
  }
}
