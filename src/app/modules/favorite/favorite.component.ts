import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent implements OnInit {
  public favoriteImages: string[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.getFavorites().subscribe(favorites => {
      this.favoriteImages = favorites;
    });
  }

  public toggleFavorite(image: string): void {
    this.favoritesService.toggleFavorite(image);
  }
}