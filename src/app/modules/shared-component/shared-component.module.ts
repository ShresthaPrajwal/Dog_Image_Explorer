import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogImageComponent } from '../../components/dog-image/dog-image.component';



@NgModule({
  declarations: [DogImageComponent],
  imports: [
    CommonModule
  ],
  exports: [DogImageComponent]
})
export class SharedComponentModule { }
