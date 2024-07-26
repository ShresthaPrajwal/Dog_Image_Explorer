import { Component, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})
export class DogImageComponent {
  @Input() public imageUrl!: string;
  public isPopupOpen = false;

  constructor(private favoritesService: FavoritesService) {}

  public toggleFavorite(): void {
    this.favoritesService.toggleFavorite(this.imageUrl);
  }

  public isFavorite(): boolean {
    return JSON.parse(localStorage.getItem('favorites') || '[]').includes(this.imageUrl);
  }

  public openPopup(): void {
    this.isPopupOpen = true;
  }

  public closePopup(): void {
    this.isPopupOpen = false;
  }
}
