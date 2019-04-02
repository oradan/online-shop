import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Product } from '../../models/product';
import { DatabaseService } from '../../services/database.service';
import { TrackerError } from '../../models/traker-error';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private updatedProduct:Product
  constructor(private dataservice:DatabaseService , private route:ActivatedRoute, private router:Router) { }

  
  ngOnInit() {
  
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.dataservice.getProductById(id).subscribe(
      (data:Product)=>this.updatedProduct=data,
      (err:TrackerError)=>console.log(err.friendlyMessage),
      ()=>console.log(this.updatedProduct)
    )

  }
  save(updateProductForm:NgForm){
    this.dataservice.updateProduct(this.updatedProduct).subscribe(
      (data:Product)=>console.log(data),
      (err:TrackerError)=> console.log(err)
    )
    updateProductForm.reset()
    this.router.navigate(['/products'])

  }
}
