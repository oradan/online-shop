import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityServiceService } from './security-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private securityService:SecurityServiceService,
  private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let activateRules:string =next.data["activateRules"]
    if(this.securityService.userAuthObject.isAuthenticated && this.securityService.userAuthObject[activateRules]){
      return true
    }else{
      this.router.navigate(["/login"],
      {queryParams:{returnUrl: state.url}});
      return false
    }
   
  }
}
