import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError, from} from 'rxjs';
import {catchError} from 'rxjs/operators'
import { TrackerError } from '../models/traker-error';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { UserAuth } from '../models/userauth';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private httpErrorhandler(error: HttpErrorResponse):Observable<TrackerError>{
    let dataError = new TrackerError()
    dataError.errorNumber=100;
    dataError.errorStaus=error.status
    dataError.message = error.statusText;
    dataError.friendlyMessage="An error ocured while retrieving data."
    return throwError(dataError)
    }
  constructor(private http:HttpClient) { }
  
  getAllProducts():Observable<Product[]|TrackerError>{
    let dataUrl ="api/products"
    return this.http.get<Product[]>(dataUrl)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))

    )
  }

  getAllOrders():Observable<Order[]|TrackerError>{
    let dataUrl = "api/orders";
    return this.http.get<Order[]>(dataUrl)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )
  }

  getProductById(productId:number):Observable<Product|TrackerError>{
    let dataUrl=`api/products/${productId}`;
    return this.http.get<Product>(dataUrl)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
      
    )
  }
  addProduct(newProduct:Product):Observable<Product|TrackerError>{
    let dataUrl="api/products";
    return this.http.post<Product>(dataUrl, newProduct)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )
  }
  updateProduct(updatedProduct:Product):Observable<Product|TrackerError>{
    let dataUrl=`api/products/${updatedProduct.id}`;
    return this.http.put<Product>(dataUrl,updatedProduct)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )
  }

  deleteProduct(pruductId:number): Observable<Product|TrackerError>{
    let dataUrl = `api/products/${pruductId}`;
    return this.http.delete<Product>(dataUrl)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )
  }

  getAllUserAuth():Observable<UserAuth[]|TrackerError>{
    const dataUrl=`api/loginObjects`;
    return this.http.get<UserAuth[]>(dataUrl)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )

  }
}
