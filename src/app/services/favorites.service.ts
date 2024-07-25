import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  private favouritesSubject = new BehaviorSubject<string[]>(this.favorites)

  constructor() { }

  public getFavorites(): Observable<string[]> {
    return this.favouritesSubject.asObservable();
  }


  public toggleFavorite(image: string): void{
    if (this.favorites.includes(image)) {
      this.favorites = this.favorites.filter(fav => fav !== image);
    } else {
      this.favorites.push(image);
    }
    this.updateFavorites();
  }

  private updateFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.favouritesSubject.next(this.favorites);
  }
}
