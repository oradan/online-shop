import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Product } from '../models/product';
import { Order } from '../models/order';
import { UserAuth } from '../models/userauth';


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
      shortDescription:"Lorem Ipsum has been the industry's standard dummy text ",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },{
      id:2,
      productName:"gecuta",
      productPrice:41,
      productImgUrl:"assets/images/pic1.jpg",
      shortDescription:"Lorem Ipsum has been the industry's standard dummy text ",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },{
      id:3,
      productName:"palton",
      productPrice:28,
      productImgUrl:"assets/images/pic2.jpg",
      shortDescription:"Lorem Ipsum has been the industry's standard dummy text ",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },{
      id:4,
      productName:"palarie",
      productPrice:23,
      productImgUrl:"assets/images/pic3.jpg",
      shortDescription:"Lorem Ipsum has been the industry's standard dummy text ",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id:5,
      productName:"sapca",
      productPrice:78,
      productImgUrl:"assets/images/WholesalePetShop.jpg",
      shortDescription:"Lorem Ipsum has been the industry's standard dummy text ",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id:6,
      productName:"test6",
      productPrice:854,
      productImgUrl:"assets/images/pic4.jpg",
      shortDescription:"Lorem Ipsum has been the industry's standard dummy text ",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id:7,
      productName:"ochelari",
      productPrice:99,
      productImgUrl:"assets/images/WholesalePetShop.jpg",
      shortDescription:"Lorem Ipsum has been the industry's standard dummy text ",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id:8,
      productName:"pix",
      productPrice:102,
      productImgUrl:"assets/images/pic1.jpg",
      shortDescription:"Lorem Ipsum has been the industry's standard dummy text ",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id:9,
      productName:"ceva",
      productPrice:88,
      productImgUrl:"assets/images/pic2.jpg",
      shortDescription:"Lorem Ipsum has been the industry's standard dummy text ",
      productDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
  ]

    const orders: Order[]=[{
      id:111,
      userId:11,
      invoiceAddress:"Invoice Address",
      schippingAdress:"Shipping Addres",
      orderedItems:[{productId:9,productName:"ceva",productPrice:88, productQuantity:2},{productId:5,productName:"sapca",productPrice:78, productQuantity:3}],
      orderTotal:410,
      saved:true
     
    }]

    const loginObjects:UserAuth[]=[{
      id:11,
      userId:111,
      userFullName:"Radan Olga (admin)",
      userAddress:"Buna ziua nr 12",
      userShippingAddress:"Buna ziua Nr 12 shipping address",
      userName:"olgaradan",
      password:"1234",
      authToken:"fhgkfh7ugd4",
      isAuthenticated:true,
      hasAdminRole:true,
      
    },
    {
      id:12,
      userId:222,
      userFullName:"Fabiana Panait (user)",
      userAddress:"Calea Manastur",
      userShippingAddress:"Calea Manastur shipping address",
      userName:"fabianapanait",
      password:"1234",
      authToken:"hgdfsa5218jjgh",
      isAuthenticated:true,
      hasAdminRole:false,
      
    }
    ]

    
    return {products,orders,loginObjects}
  }
}
