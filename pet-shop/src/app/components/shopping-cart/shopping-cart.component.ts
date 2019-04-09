import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Order } from 'src/app/models/order';
import { SecurityServiceService } from 'src/app/services/security-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { TrackerError } from 'src/app/models/traker-error';
import { SharedPropertiesService } from 'src/app/services/shared-properties.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  private currentOrder:Order;
  private isLogedIn:boolean;
  public placedOrder:Order;
  public userName: string;


  constructor(private cartService:ShoppingCartService, 
              private securityService:SecurityServiceService, 
              private router: Router,
              private route: ActivatedRoute,
              private dataBaseServer: DatabaseService
              ) { }


  
  deleteItem(itemId:number){
    this.cartService.deleteItem(itemId); 
    this.cartService.totalPrice()
  }
  displayTotalPrice():void{
  this.cartService.totalPrice();
  }
  placeOrder(){
    if(this.securityService.userAuthObject.isAuthenticated){
    this.dataBaseServer.addOrder(this.currentOrder).subscribe(
      (data:Order)=>{
        this.placedOrder=data;
        this.cartService.resetCart()
        console.log(data)
        
      },
      (error:TrackerError)=>console.log(error.friendlyMessage)
    )
    }else{
     this.router.navigate(['/login'],
     {queryParams:{shoppingCartUrl: this.route.snapshot.url}})
    }
  }


  ngOnInit() {
   this.currentOrder= this.cartService.order;
   this.currentOrder.userId=this.securityService.userAuthObject.userId;
   this.currentOrder.invoiceAddress=this.securityService.userAuthObject.userAddress;
   this.currentOrder.schippingAdress=this.securityService.userAuthObject.userShippingAddress;
   this.isLogedIn=this.securityService.userAuthObject.isAuthenticated;
   this.userName=this.securityService.userAuthObject.userFullName
   this.cartService.totalPrice()
  }

}
