import { CarService } from './../services/car.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { Categories } from '../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  car!:Car[];
  id! : number;
categories! : Categories[];

  constructor(public  authService:AuthService,
   private carService:CarService) { }

  ngOnInit(): void {
    //this.categories=this.carService.listerCategories();
    //this.car=this.carService.listeCar();
    this.carService.listeCar().subscribe(car => {
      this.car = car;

    }
    );
    this.carService.ListeCategories().subscribe(categories => {
      this.categories = categories;
      console.log(categories)

    }
    );
  }
  onChange()
  {
    this.carService.rechercherParCategories(this.id).subscribe(car => {
      this.car = car;

    }
    )

  }
 
  

}
