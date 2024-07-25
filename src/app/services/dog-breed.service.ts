import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogBreedService {
  private breedsUrl: string = 'https://dog.ceo/api/breeds/list/all';
  private breedImagesUrl: string = 'https://dog.ceo/api/breed';

  constructor(private http: HttpClient) { }

  public getBreeds(): Observable<any>{
    return this.http.get<any>(this.breedsUrl);
  }

  public getBreedImages(breed: string, subBreed?: string): Observable<any> {
    let url = `${this.breedImagesUrl}/${breed}`;
    if (subBreed) {
      url += `/${subBreed}`;
    }
    url += '/images';
    return this.http.get<any>(url);
  }
}
