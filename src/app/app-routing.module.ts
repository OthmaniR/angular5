import { CarGuard } from './car.guard';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  CarComponent } from './car/car.component';
import {AddCarComponent} from './add-car/add-car.component'
import { UpdateCarComponent } from './update-car/update-car.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { NomrechercherComponent } from './nomrechercher/nomrechercher.component';
import { ListeCategoriesComponent } from './liste-categorie/liste-categorie.component';

const routes: Routes = [
  {path:"car",component:CarComponent},
  {path:"add-car",component:AddCarComponent,canActivate:[CarGuard]},
  {path:"" ,redirectTo:"car",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:"update-car/:id",component:UpdateCarComponent,canActivate:[CarGuard]},
  {path:"rechercheParCategories",component:RechercheParCategorieComponent},
  {path:"nomrechercher",component:NomrechercherComponent},
  {path:"listeCategories",component:ListeCategoriesComponent,canActivate:[CarGuard]}


  

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
