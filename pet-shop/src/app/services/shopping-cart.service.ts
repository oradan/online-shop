import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { UserAuth } from '../models/userauth';
import { SecurityServiceService } from './security-service.service';
import { OrderedItem } from '../models/ordered-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public order:Order=new Order()

  constructor(private securityService:SecurityServiceService ) {

    this.order.id=null;
    this.order.invoiceAddress="";
    this.order.schippingAdress="";
    this.order.userId=this.securityService.userAuthObject.userId;
    this.order.orderedItems=[];
    this.order.orderTotal=0

   }
  
   addNewItem(newItem:OrderedItem){
     this.order.orderedItems.push(newItem)
   }

   deleteItem(itemId:number){
   const itemToDelete=this.order.orderedItems.find(item=>item.productId===itemId);
   this.order.orderedItems.splice(this.order.orderedItems.indexOf(itemToDelete),1)
   }


}
