import { Categories } from "./categorie.model";
import { Image } from "./image.model";

export class Car {
    idCar? : number;
    nomCar? : string;
    paysCar?: string;
    
    dateFound? : Date ;
    categorie!: Categories;
    image! : Image
    imageStr!:string;
    }