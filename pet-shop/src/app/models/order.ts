import { OrderedItem } from './ordered-item';

export class Order {
    id:number;
    userId:number;
    invoiceAddress:string;
    schippingAdress:string;
    orderedItems:OrderedItem[];
    orderTotal:number;
    saved:boolean;

}
