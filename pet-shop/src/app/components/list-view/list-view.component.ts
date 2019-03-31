import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Product } from 'src/app/models/product';
import { TrackerError } from 'src/app/models/traker-error';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms'



@Component({
  // selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  private sortForm:FormGroup;
  private products:Product[];
  private filteredProductList:Product[];
  private sortByPrice:Product[];
  private sortAlphabeticaly: Product[];
  constructor(private dataService: DatabaseService, private fb:FormBuilder) {
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
   }else{ this.filteredProductList=this.products}
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
          console.log("hjghjgfdsh")
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
