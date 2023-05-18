import { Categories } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { AuthService } from '../services/auth.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-nomrechercher',
  templateUrl: './nomrechercher.component.html',
  styles: [
  ]
})
export class NomrechercherComponent implements OnInit {

  car!:Car[];
  id! : number;
  nomcar!:string;
  
  categories! : Categories[];
  allcar!:Car[];

  constructor(public  authService:AuthService,
   private carService:CarService) { }

  ngOnInit(): void {
    
    this.carService.listeCar().subscribe(car => {
      console.log(car);
      this.car = car;
      });

    
    //this.allcar=this.carService.listeCar();
  }
  
 
  onkeyUpp(text:String)
  {
    console.log(text);
    this.car=this.allcar.filter(item=>item.nomCar?.toLowerCase().includes(text.toLowerCase()));

  }
  onKeyUp(text:string){
    this.carService.rechercherParNom(this.nomcar).
    subscribe(car => {
    this.car = car;
    console.log(car)});
    }

}
