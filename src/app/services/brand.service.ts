import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpclient:HttpClient) { }

apiUrl='https://localhost:7022/api/brands/getall';
  getBrands():Observable<ListResponseModel<Brand>>{
return this.httpclient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
