import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { Product } from 'src/app/models/product';
import { TrackerError } from 'src/app/models/traker-error';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private product:Product
  constructor(private route: ActivatedRoute , private dataservice: DatabaseService, private router: Router) { }

deleteProduct():void{
  if(confirm(`Realy delete the product :${this.product.productName}`)){
    this.dataservice.deleteProduct(this.product.id).subscribe(
      ()=>this.router.navigate(['/products']),
      (error:TrackerError)=>console.log(error.friendlyMessage)
    )
  }
}
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.dataservice.getProductById(id).subscribe(
      (data:Product)=>this.product=data,
      (err:TrackerError)=>console.log(err.friendlyMessage),
      ()=>console.log(this.product)
    )

  }

}
