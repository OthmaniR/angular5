import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { NomrechercherComponent } from './nomrechercher/nomrechercher.component';
import { ListeCategoriesComponent } from './liste-categorie/liste-categorie.component';
import { UpdateCategoriesComponent } from './update-categorie/update-categorie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddCarComponent,
    UpdateProduitComponent,
    UpdateCarComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent,
    NomrechercherComponent,
    ListeCategoriesComponent,
    UpdateCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
