import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:7022/api/';

  constructor(private httpclient: HttpClient) {}

  getCarImages(): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'CarImages/getall';
    return this.httpclient.get<ListResponseModel<CarImage>>(newPath);
  }

}
