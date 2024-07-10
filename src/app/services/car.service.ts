import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:7022/api/';

  constructor(private httpclient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpclient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetailsbybrand?id=';
    return this.httpclient.get<ListResponseModel<Car>>(newPath + brandId);
  }

  getCarsByColor(colorId: number):Observable<ListResponseModel<Car>>{
let newPath = this.apiUrl + 'cars/getdetailsbycolor?id=';
return this.httpclient.get<ListResponseModel<Car>>(newPath+colorId);
  }
}
