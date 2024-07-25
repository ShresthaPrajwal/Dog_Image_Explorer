import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogImageComponent } from './dog-image.component';

describe('DogImageComponent', () => {
  let component: DogImageComponent;
  let fixture: ComponentFixture<DogImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
