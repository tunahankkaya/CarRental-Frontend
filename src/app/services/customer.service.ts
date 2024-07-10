import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  apiUrl='https://localhost:7022/api/customer/getall'
  constructor(private httpclient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
return this.httpclient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
