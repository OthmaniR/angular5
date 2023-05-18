import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categories } from '../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styles: [
  ]
})
export class UpdateCategoriesComponent implements OnInit {
  @Input()
ajout!:boolean;

  @Input()
  categorie!:Categories;


  @Output()
  categorieupdated=new EventEmitter<Categories>();
 



  constructor() { }

  ngOnInit(): void {
    console.log(this.categorie);
  }
  saveCategorie(){
    this.categorieupdated.emit(this.categorie);
    
    
    }
    

}
