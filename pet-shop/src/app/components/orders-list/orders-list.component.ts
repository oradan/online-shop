import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  private allOrders : Order[];

  constructor(private dataService: DatabaseService) { }

  ngOnInit() {
    this.dataService.getAllOrders().subscribe(
    (data:Order[])=>{

      this.allOrders=data
      console.log(data)
    
    }
    )
  }

}
