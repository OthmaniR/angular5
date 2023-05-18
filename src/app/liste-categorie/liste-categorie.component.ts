import { AuthService } from './../services/auth.service';
import { CarService } from './../services/car.service';
import { Categories } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styles: [
  ]
})
export class ListeCategoriesComponent implements OnInit {
  ajout:boolean=true;
  Categories=new Categories();

  categorie!:Categories[];
  updatedcategorie:Categories = {"idLeg":0,"nomCategorie":""};


  constructor(private carservices:CarService,
    public AuthService : AuthService) { }
   

  ngOnInit(): void {
    this.carservices.ListeCategories().subscribe(categorie => {
      this.categorie = categorie;
      console.log(categorie)
    }
    );
    
  }
  categorieupdated(categorie:Categories){
   // this.updatedcategorie=categorie;
   this.carservices.ajoutercategorie(categorie);
   
   console.log("updated categorie",categorie);
  }
  updateleg(l : Categories){
    this.updatedcategorie=l;

    this.ajout=false;
  }
  categorieUpdated(cat:Categories){
    console.log("Cat updated event",cat);
    this.carservices.ajouterCategories(cat).subscribe( ()=> this.chargerCategories());
     
    }
    chargerCategories(){
      this.carservices.listeCategories().subscribe(cats => {this.categorie =cats;
      
      });
      }
      AjouterCategories(){
        console.log(this.Categories)
          
        this.carservices.ajouterCategories(this.Categories).subscribe(prod => {
          console.log(prod);
          window.location.reload();
      }
        

        );
        this.Categories=new Categories();
        this.chargerCategories();
        }
      }


    
 

