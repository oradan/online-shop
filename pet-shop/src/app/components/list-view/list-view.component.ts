import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Product } from 'src/app/models/product';
import { TrackerError } from 'src/app/models/traker-error';
import {FormGroup,FormBuilder} from '@angular/forms'
import { UserAuth } from '../../models/userauth';
import { SecurityServiceService } from '../../services/security-service.service';



@Component({
  // selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  private sortForm:FormGroup;
  private products:Product[];
  private filteredProductList:Product[];
  private page:number=1;
  private pageSize:number=4;
  private userAuthObject:UserAuth=null
  constructor(private dataService: DatabaseService, private fb:FormBuilder,private securityService:SecurityServiceService ) {
    this.userAuthObject=this.securityService.userAuthObject
   }


  resetFilter(){
    this.sortForm.reset()
  }
  
  resetField(field:string){
   this.sortForm.get(field).reset()
  }

  
  searchFilter(searchBy?:string):void{
  if(searchBy){
    searchBy=searchBy.toLocaleLowerCase()
    this.filteredProductList = this.products.filter(
       (product:Product)=>product.productName.toLocaleLowerCase().indexOf(searchBy)!==-1)

   }else{ 
     this.filteredProductList=this.products
   
    }
  }
  sortAlphabeticalyAscending(a:any,b:any){
    var x = a.productName.toLowerCase();
    var y = b.productName.toLowerCase();
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  }
  sortAlphabeticalydescending(a:any,b:any){
    var x = a.productName.toLowerCase();
    var y = b.productName.toLowerCase();
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  }

  deleteItemFrontEnd(productId:number):void{
  const deletedProduct=this.filteredProductList.find((product:Product)=>product.id===productId)
  this.filteredProductList.splice(this.filteredProductList.indexOf(deletedProduct),1)
  
 }

  deleteItemDataBase(productId:number,productName:string){
  if(confirm(`Realy delete the product :${productName}`)){
    this.dataService.deleteProduct(productId).subscribe(
      (data:Product)=>this.deleteItemFrontEnd(productId),
      (err:TrackerError)=>console.log(err.friendlyMessage)
     )
  }
  
  }

  ngOnInit() {
    
    this.sortForm = this.fb.group({
     alphabeticallySort:"",
     priceSort:"",
     search:"",
  
    })

    this.sortForm.get('search').valueChanges.subscribe(
      value=>this.searchFilter(value)
    )
    this.sortForm.get('alphabeticallySort').valueChanges.subscribe(
      value=>{

        if(value ==="ascending"){
          
           this.filteredProductList=this.filteredProductList.slice(0).sort(this.sortAlphabeticalyAscending)
        } else if(value ==="descending"){
          this.filteredProductList=this.filteredProductList.slice(0).sort(this.sortAlphabeticalydescending)
         }else{this.filteredProductList=this.products}
      }
    )
    this.sortForm.get('priceSort').valueChanges.subscribe(
      value=>{
        switch(value){
          case "ascending":
          this.filteredProductList=this.filteredProductList.slice(0).sort((a,b)=>a.productPrice-b.productPrice)
          break;
          case "descending":
          this.filteredProductList=this.filteredProductList.slice(0).sort((a,b)=>b.productPrice-a.productPrice)
          break;
          case "none":
          this.filteredProductList=this.filteredProductList
          break;
          default:
          this.filteredProductList=this.products
        }
      }
    )
    this.dataService.getAllProducts().subscribe(
      (data:Product[])=>{
       this.products=data;
       this.filteredProductList=data 
       
        },
      (err:TrackerError)=>console.log(err.friendlyMessage)

    )


    

  }

}
