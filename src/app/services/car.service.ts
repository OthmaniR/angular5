import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';
import { Categories } from '../model/categorie.model';
import { Image } from '../model/image.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
providedIn: 'root'
})
export class CarService {
  apiURL: string = ' http://localhost:8070/cars/api';
  apiURLCat: string = 'http://localhost:8070/cars/api/leg';
car!: Car[]; //un tableau de car
categories!: Categories[] ;

carRecherche!: Car[];
carRecherche2!: Car[];
constructor(private http: HttpClient,private authService:AuthService) { }
  /*this.categories=[{id:1,legue:"ligue1"},{id:2,legue:"Bundesliga"},{id:3,legue:"Premier Categories"},{id:4,legue:"Serie A"}];
this.car = [
  { id : 1, nom: "juvents", classement:1, datematch
: new Date("01/14/2011"),categorie:this.categories[3]},
{ id : 2, nom: "paris saint german", classement:6, datematch
: new Date("01/14/2011"),categorie:this.categories[0]},
{ id: 3, nom: "bayern munich", classement: 2, datematch
 : new Date("12/17/2010"),categorie:this.categories[1]},
{ id: 4, nom:"Manchester-city", classement: 3, datematch
 : new Date("02/20/2020"),categorie:this.categories[2]},
 { id : 5, nom: "Milan", classement:7, datematch
: new Date("01/14/2011"),categorie:this.categories[3]},
{ id : 5, nom: "Monaco", classement:5, datematch
: new Date("01/14/2011"),categorie:this.categories[0]},

  
];
}*/
listeCare():Car[] {
  return this.car;
}
ajoutercar( e: Car){
  this.car.push(e);
  }
  supprimercar( prod: Car){
    //supprimer le produit prod du tableau car
    const index = this.car.indexOf(prod, 0);
    if (index > -1) {
    this.car.splice(index, 1);
    }
    //ou Bien
    /* this.car.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.car.splice(index, 1);
    }
    }); */
    }
    care!:Car;
    

updateCare(p:Car)
{

this.supprimercar(p);
this.ajoutercar(p);
}
listerCategories():Categories[]{
  return this.categories;


}



 ajoutercategorie(l:Categories){
  this.categories.push(l);
 }
 // api
 
  ajouterCare( car: Car):Observable<Car>{
    return this.http.post<Car>(this.apiURL, car, httpOptions);
    }
    supprimerCare(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      consulterCare(id : number): Observable<Car>{
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Car>(url);
      }
      updateCaree(car :Car) : Observable<Car>
{
return this.http.put<Car>(this.apiURL, car, httpOptions);
}

listeCategories():Observable<Categories[]>{
  return this.http.get<Categories[]>(this.apiURL+"/categories");
  }
  
      consulterCategoriese(id : number): Observable<Categories>{
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Categories>(url);
      }
      rechercherParCategoriese(id: number):Observable< Car[]> {
        const url = `${this.apiURL}/prodscat/${id}`;
        return this.http.get<Car[]>(url);
        }
        rechercherParNome(nom: string):Observable< Car[]> {
          const url = `${this.apiURL}/carByName/${nom}`;
          return this.http.get<Car[]>(url);
          }
          ajouterCategoriese( categorie: Categories):Observable<Categories>{
            return this.http.post<Categories>(this.apiURL+"/categories", categorie, httpOptions);
           }
          
           listeCar(): Observable<Car[]>{
            let jwt=this.authService.getToken();
            jwt="Bearer "+jwt;
            let headers: HttpHeaders = new HttpHeaders({"Authorization": jwt});
            
            return this.http.get<Car[]>(this.apiURL+"/all", {headers: headers});

          }
          ListeCategories(): Observable<Categories[]>{
            let jwt=this.authService.getToken();
            jwt="Bearer "+jwt;
            let headers: HttpHeaders = new HttpHeaders({"Authorization": jwt});
            return this.http.get<Categories[]>(this.apiURLCat, {headers: headers});
            }

          ajouterCar( e: Car):Observable<Car>{
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Car>(this.apiURL+"/addcar", e, {headers:httpHeaders});
            
           
            
        }
        supprimerCar(id : number) {
          const url = `${this.apiURL}/deletecar/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.delete(url, {headers:httpHeaders});
          }
          consulterCar(id: number): Observable<Car> {
            const url = `${this.apiURL}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Car>(url,{headers:httpHeaders});
            }
            updateCar(e :Car) : Observable<Car> {
              let jwt = this.authService.getToken();
              jwt = "Bearer "+jwt;
              let httpHeaders = new HttpHeaders({"Authorization":jwt})
              return this.http.put<Car>(this.apiURL+"/updatecar", e, {headers:httpHeaders});
              }
              ajouterCategories( e: Categories):Observable<Categories>{
                let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.post<Categories>(this.apiURL+"/addleg", e, {headers:httpHeaders});
                
                }
                rechercherParCategories(idCat: number): Observable<Car[]> {
                  let jwt = this.authService.getToken();
                  jwt = "Bearer "+jwt;
                  let httpHeaders = new HttpHeaders({"Authorization":jwt})
                  return this.http.get<Car[]>(this.apiURL+"/eqlg/"+idCat, {headers:httpHeaders});
                  
                  } 
                  rechercherParNom(nom: string): Observable<Car[]> {
                    let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})
                    return this.http.get<Car[]>(this.apiURL+"/car/"+nom, {headers:httpHeaders});
                  }
                  uploadImage(file: File, filename: string): Observable<Image>{
                    let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})
                    const imageFormData = new FormData();
                    imageFormData.append('image', file, filename);
                    const url = `${this.apiURL + '/image/upload'}`;
                    return this.http.post<Image>(url, imageFormData,{headers:httpHeaders});
                    }
                    loadImage(id: number): Observable<Image> {
                      let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})

                    const url = `${this.apiURL + '/image/get/info'}/${id}`;
                    return this.http.get<Image>(url,{headers:httpHeaders});
                    }
                    
          
      }
          //with jwt
         
 





  
  
