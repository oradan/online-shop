import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedPropertiesService {
  countOrderItems:number;
  constructor() { }
}
