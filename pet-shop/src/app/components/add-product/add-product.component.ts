import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Product } from '../../models/product';
import { DatabaseService } from '../../services/database.service';
import { TrackerError } from '../../models/traker-error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  private newProduct:Product=new Product()
  constructor(private dataservice:DatabaseService, private router:Router) { }

  
  ngOnInit() {
  
  }
  save(addProductForm:NgForm){
    this.dataservice.addProduct(this.newProduct).subscribe(
      (data:Product)=>console.log(data),
      (err:TrackerError)=> console.log(err),
    )
    addProductForm.reset()
    this.router.navigate(['/products'])

  }
}
