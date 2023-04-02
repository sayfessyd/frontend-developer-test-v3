import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/shared/services/photos.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  ngOnInit() { }

  fetchFavourties(): any[] {
    return this.photosService.getFavourites();
  }

}
