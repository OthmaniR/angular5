import { Categories } from './../model/categorie.model';

import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  newCar = new Car();
  uploadedImage!: File;
imagePath: any;

  categorie!: Categories[] 
  newid!:number;
  newcategorie!:Categories;
  constructor(private carservices: CarService,
    private router :Router) { }
  ngOnInit(): void {
    this.carservices.ListeCategories().
    subscribe(cats => {this.categorie = cats;
    console.log("aaaa"+cats);
    console.log(this.categorie);
    });
    }
    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }
 
  addCar(){
    this.carservices.uploadImage(this.uploadedImage, this.uploadedImage.name).subscribe((img:Image) => {
this.newCar.image=img;
    this.newCar.categorie = this.categorie.find(cat => cat.idLeg == this.newid)!;
    console.log(this.newCar)
    this.carservices.ajouterCar(this.newCar)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['car']).then(()=>{window.location.reload();});
    });
    }
    );
  }
    
      
    
  
  

    
    

}
