import { Component, OnInit } from '@angular/core';
import { SecurityServiceService } from './services/security-service.service';
import { UserAuth } from './models/userauth';
import { Router } from '@angular/router';
import { ShoppingCartService } from './services/shopping-cart.service';
import { Order } from './models/order';
import { DatabaseService } from './services/database.service';
import { SharedPropertiesService } from './services/shared-properties.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'pet-shop';
  userAuthObject: UserAuth = null;
  pendingOrder: Order;

  constructor(private securityService: SecurityServiceService,
    private router: Router,
    private cartService: ShoppingCartService,
    private dataService: DatabaseService,
    private sharedProp: SharedPropertiesService) {
    this.userAuthObject = this.securityService.userAuthObject
  
  }

 get countOrder():number{
   return this.sharedProp.countOrderItems
 }
  logout() {
    this.securityService.logOut()
    this.router.navigate(['/home'])
   // this.cartService.totalPrice()
    this.pendingOrder = this.cartService.order
    this.pendingOrder.invoiceAddress = this.securityService.userAuthObject.userAddress;
    this.pendingOrder.schippingAdress = this.securityService.userAuthObject.userShippingAddress;
    this.pendingOrder.userId = this.securityService.userAuthObject.userId;
    if ( this.pendingOrder.orderedItems.length>0) {
      this.dataService.addOrder(this.pendingOrder).subscribe(
        (data: Order) => {

          console.log(data)
          this.cartService.resetCart()
        })
    } else { console.log("the order have been already saved/ore there is no items") }


  }
  ngOnInit() {
   }

}
