import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { UserAuth } from '../models/userauth';
import { Observable, from, of, throwError } from '../../../node_modules/rxjs';
import { catchError, tap } from 'rxjs/operators'
import { User } from '../models/user';
import { TrackerError } from '../models/traker-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {
  userAuthObject: UserAuth = new UserAuth();

  private httpErrorhandler(error: HttpErrorResponse): Observable<TrackerError> {
    let dataError = new TrackerError()
    dataError.errorNumber = 100;
    dataError.errorStaus = error.status
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error ocured while retrieving data."
    return throwError(dataError)
  }
  constructor(private dataService: DatabaseService, private http: HttpClient) { }

  resetUserAuthObject(): void {
    this.userAuthObject.id = null;
    this.userAuthObject.userFullName = "";
    this.userAuthObject.userName = "";
    this.userAuthObject.password = "";
    this.userAuthObject.authToken = "";
    this.userAuthObject.isAuthenticated = false;
    this.userAuthObject.hasAdminRole = false,
      localStorage.removeItem("authToken")
  }

  login(user: User): Observable<UserAuth[] | TrackerError> {
    const dataUrl = `api/loginObjects`;
    this.resetUserAuthObject();

    return this.http.get<UserAuth[]>(dataUrl)
      .pipe(
        tap(
          (data: UserAuth[]) => {
            data.forEach(element => {
              if ((element.userName === user.userName) && (element.password === user.password)) {
                Object.assign(this.userAuthObject, element)
              }
            });

            if (this.userAuthObject.userName !== "") {
              localStorage.setItem("authToken", this.userAuthObject.authToken)
            }

          }

        ),
        catchError(error => this.httpErrorhandler(error))
      )

  }


  logOut(): void {
    this.resetUserAuthObject()

  }
}
