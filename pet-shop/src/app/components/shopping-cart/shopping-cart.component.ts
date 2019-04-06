import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Order } from 'src/app/models/order';
import { OrderedItem } from 'src/app/models/ordered-item';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit,AfterViewInit {
  private currentOrder:Order;
// @ViewChildren(NgModel) quantityInput !: QueryList<NgModel>;


  constructor(private cartService:ShoppingCartService) { }



  deleteItem(itemId:number){
    this.cartService.deleteItem(itemId); 
    this.totalPrice()
    console.log(this.currentOrder)
    console.log(this.cartService.order)
  }

  totalPrice(){
  this.currentOrder.orderTotal=0;
  this.currentOrder.orderedItems.forEach(data=>{
  this.currentOrder.orderTotal+=(data.productPrice*data.productQuantity)
   })
  }

  ngAfterViewInit():void{
    // console.log(this.quantityInput)
  
    // this.quantityInput.changes.subscribe(
    //   ()=>console.log("hjgfdsgfds")
    // )
  }

  
  ngOnInit() {
   this.currentOrder= this.cartService.order;
   this.totalPrice()
   console.log(this.currentOrder)
  }

}
