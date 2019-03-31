import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Product } from '../models/product';
import { User } from '../models/user';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const products : Product[]=[{
      id:1,
      productName:"hainuta",
      productPrice:50,
      productImgUrl:"assets/images/WholesalePetShop.jpg",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
    },{
      id:2,
      productName:"gecuta",
      productPrice:41,
      productImgUrl:"assets/images/pic1.jpg",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
    },{
      id:3,
      productName:"palton",
      productPrice:28,
      productImgUrl:"assets/images/pic2.jpg",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
    },{
      id:4,
      productName:"palarie",
      productPrice:23,
      productImgUrl:"assets/images/pic3.jpg",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
    },
    {
      id:5,
      productName:"sapca",
      productPrice:78,
      productImgUrl:"assets/images/WholesalePetShop.jpg",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
    },
    {
      id:6,
      productName:"test6",
      productPrice:854,
      productImgUrl:"assets/images/pic4.jpg",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
    },
    {
      id:7,
      productName:"ochelari",
      productPrice:99,
      productImgUrl:"assets/images/WholesalePetShop.jpg",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
    },
    {
      id:8,
      productName:"pix",
      productPrice:102,
      productImgUrl:"assets/images/pic1.jpg",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
    },
    {
      id:9,
      productName:"ceva",
      productPrice:88,
      productImgUrl:"assets/images/pic2.jpg",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
    }
  ]

    const users: User[]=[
      {
      id:11,
      name:"Radan Olga",
      userName:"radanolga",
      email:"plotnica@yahoo.com",
      password:"plusminus1"
     },
     {
      id:12,
      name:"Fabiana Panait",
      userName:"fabianapanait",
      email:"fabianapanait@yahoo.com",
      password:"plusminustest"
    }
     ]


    const orders: Order[]=[{
      id:111,
      userId:11,
      invoiceAddress:"Invoice Address",
      schippingAdress:"Shipping Addres",
      urderedItems:[{productId:9,productPrice:88, productQuantity:2},{productId:5,productPrice:78, productQuantity:3}]
    }]
    return {products,users,orders}
  }
}
