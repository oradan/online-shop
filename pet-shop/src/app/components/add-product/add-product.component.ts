import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Product } from '../../models/product';
import { DatabaseService } from '../../services/database.service';
import { TrackerError } from '../../models/traker-error';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  private newProduct:Product=new Product()
  constructor(private dataservise:DatabaseService) { }

  
  ngOnInit() {
   console.log(this.newProduct.productDescription)
  }
  save(addProductForm:NgForm){
    this.dataservise.addProduct(this.newProduct).subscribe(
      (data:Product)=>console.log(data),
      (err:TrackerError)=> console.log(err)
    )
    addProductForm.reset()
  }
}
