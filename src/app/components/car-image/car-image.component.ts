import { Component,OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carImage.service';


@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit{
  carImages:CarImage[]
  baseUrl:string="https://localhost:7022/Upload/Images";
  
    constructor(private imageService:CarImageService) {
    }
    ngOnInit(): void {
      this.getCarImages();
    }
  
    getCarImages(){
      this.imageService.getCarImages().subscribe(response=>{
        this.carImages=response.data;
        
      })
    }

    
}
