import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpclient:HttpClient) { }
  apiUrl='https://localhost:7022/api/rentals/getrentaldetails';
  getRents():Observable<ListResponseModel<Rental>>{
    return this.httpclient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
