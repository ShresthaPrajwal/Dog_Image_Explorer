import { Component, OnInit } from '@angular/core';
import { DogBreedService } from '../../../services/dog-breed.service';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrl: './dog-list.component.css',
})
export class DogListComponent implements OnInit{
  public breeds: {[key: string]: string[]} = {};
  public breedNames: string[] = [];
  public selectedBreed: string | null = null;
  public subBreeds: string[] = [];
  public selectedSubBreed: string | null = null;
  public breedImages: string[] =[];

  constructor(private dogBreedService: DogBreedService, private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.dogBreedService.getBreeds().subscribe(data => {
      this.breeds = data.message;
      this.breedNames = Object.keys(this.breeds);
      this.selectedBreed = this.breedNames[0]
    });
  }  

  public onBreedChange(event: Event):void{
    const breed = (event.target as HTMLSelectElement).value;
    this.selectedBreed = breed;
    this.subBreeds = this.breeds[breed];
    this.selectedSubBreed = this.subBreeds.length ? this.subBreeds[0] : null;
  }

  public searchBreed(): void{
    if(this.selectedBreed && this.breeds[this.selectedBreed].length==0 ){
      this.dogBreedService.getBreedImages(this.selectedBreed).subscribe(response=>{
        this.breedImages = response.message;
      })
    }
    else if(this.selectedBreed && this.selectedSubBreed){
      this.dogBreedService.getBreedImages(this.selectedBreed,this.selectedSubBreed).subscribe(response=>{
        this.breedImages = response.message;
      })
    }
  }


  public toggelFavorite(image: string):void {
    this.favoritesService.toggleFavorite(image);
  }

  public isFavorite(image:string): boolean{
    return JSON.parse(localStorage.getItem('favorites') || '[]').includes(image);
  }
}