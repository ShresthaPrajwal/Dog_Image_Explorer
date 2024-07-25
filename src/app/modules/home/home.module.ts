import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from '../shared-component/shared-component.module';



@NgModule({
  declarations: [
    DogListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }