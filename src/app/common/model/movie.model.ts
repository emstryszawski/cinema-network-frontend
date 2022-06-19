import {Category} from "./category.model";
import {Repertoire} from "./repertoire.model";

export class Movie {
  public id: number;
  public title: string;
  public description: string;
  public category: Category;
  public duration: number;
  public trailerPath: string;
  public coverPicturePath: string;
  public pathToFilmWeb: string;
  public rrating: string;
}
