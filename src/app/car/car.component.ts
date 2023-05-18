import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Car} from '../model/car.model'

import { CarService } from '../services/car.service';
import { Categories } from '../model/categorie.model';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car?:Car[];
  categorie!:Categories[];
  constructor(private carservices: CarService,
    public authService:AuthService) {

    //this.car = carservices.listeCar();
   }

   ngOnInit(): void {
    this.carservices.listeCar().subscribe(car => {
    console.log(car);
     this.car = car;
    // this.carservices
    //   .loadImage(car[5].image.idImage)
    //   .subscribe((img: Image) => {
    //   car[5].imageStr = 'data:' + img.type + ';base64,' + img.image;
    //   console.log(car[5].imageStr);
    //   });
      
    this.car.forEach((prod) => {
        console.log(prod.image)
      this.carservices
      .loadImage(prod.image.idImage)
      .subscribe((img: Image) => {
      prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
      console.log(prod.imageStr);
      });
      });
      });
      console.log(this.car);
    
      
    }
  supprimercar(p: Car)
{
  let conf=confirm("etes vous sur");
  if(conf)
this.carservices.supprimerCar(p.idCar!).subscribe(() => {});
//this.router.navigate(['car']).then(() => {
  window.location.reload();
}

}
