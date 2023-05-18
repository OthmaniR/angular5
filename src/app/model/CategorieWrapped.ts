import { Categories } from "./categorie.model";
export class CategoriesWrapper{
_embedded!: { Categories: Categories[]};
}