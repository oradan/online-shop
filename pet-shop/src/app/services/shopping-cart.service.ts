import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { UserAuth } from '../models/userauth';
import { SecurityServiceService } from './security-service.service';
import { OrderedItem } from '../models/ordered-item';
import { Observable, of } from 'rxjs';
import { SharedPropertiesService } from './shared-properties.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public order:Order=new Order()
  
  constructor(private securityService:SecurityServiceService , private sharedProp: SharedPropertiesService) {

    this.order.id=null;
    this.order.invoiceAddress=securityService.userAuthObject.userAddress;
    this.order.schippingAdress=securityService.userAuthObject.userShippingAddress;
    this.order.userId=this.securityService.userAuthObject.userId
    this.order.orderedItems=[];
    this.order.orderTotal=0;
    this.order.saved=false

   }
  //  get countOrderItems(){
  //    return this.sharedProp.countOrderItems
  //  }
  //  set countOrderItems(value:number){
  //    value=this.order.orderedItems.length
  //    this.sharedProp.countOrderItems=value
  //  }
   resetCart(){
    this.order.id=null;
    this.order.invoiceAddress="";
    this.order.schippingAdress="";
    this.order.userId=null;
    this.order.orderedItems=[];
    this.order.orderTotal=0;
    this.order.saved=false;
    this.sharedProp.countOrderItems=null;
   }

   addNewItem(newItem:OrderedItem){
     this.order.orderedItems.push(newItem)
     this.sharedProp.countOrderItems=this.order.orderedItems.length
   }

   totalPrice(){
    this.order.orderTotal=0;
    this.order.orderedItems.forEach(data=>{
    this.order.orderTotal+=(data.productPrice*data.productQuantity)
    })
  
   }
   deleteItem(itemId:number){
   const itemToDelete=this.order.orderedItems.find(item=>item.productId===itemId);
   this.order.orderedItems.splice(this.order.orderedItems.indexOf(itemToDelete),1)
   }


}
