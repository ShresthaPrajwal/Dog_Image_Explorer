import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DogListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
