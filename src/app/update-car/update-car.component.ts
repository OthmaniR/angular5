import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car} from '../model/car.model';
import { Categories } from '../model/categorie.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styles: [
  ]
})
export class UpdateCarComponent implements OnInit {
  currentCar = new Car();
  categorie!:Categories[];
  updatedid!:number;
  myImage! : string;
  uploadedImage!: File;
isImageUpdated: Boolean=false;

 
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private carService: CarService) { }

  ngOnInit(): void {
    //this.categorie=this.carService.listerCategories();
    this.carService.ListeCategories().subscribe(categories => {
      this.categorie = categories;
    });
    this.carService.consulterCar(this.activatedRoute.snapshot.params['id']).subscribe((car) => {
      console.log(car);
      this.currentCar = car;
      this.updatedid=this.currentCar.categorie.idLeg;
    
    this.carService.loadImage(this.currentCar.image.idImage).subscribe((img:Image) => {
this.myImage = 'data:' + img.type + ';base64,' + img.image;
console.log("aaaa"+this.myImage);
}); 
    });
    
  
  
  }
  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
    this.uploadedImage = event.target.files[0];
    this.isImageUpdated =true;
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => { this.myImage = reader.result as string; };
    }
    }
  updateCar() {
    this.currentCar.categorie = this.categorie.
    find(cat => cat.idLeg == this.updatedid)!;
    if (this.isImageUpdated)
{
this.carService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
this.currentCar.image = img;
this.carService
.updateCar(this.currentCar)
.subscribe((prod) => {
this.router.navigate(['car']);
});
});
}
else{
   this.carService.updateCar(this.currentCar).subscribe(prod => {
   this.router.navigate(['car']); }
   );
   

}
}
}

