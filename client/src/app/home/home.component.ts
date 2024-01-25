import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../carousel/carousel.component';
import { BodyTitlesComponent } from '../body-titles/body-titles.component';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CarouselComponent,
    CommonModule,
    BodyTitlesComponent,
    ItemComponent,
  ],
})
export class HomeComponent {
  images: string[] = ['assets/image1.jpg', 'assets/image2.jpg'];
  constructor() {}
}
