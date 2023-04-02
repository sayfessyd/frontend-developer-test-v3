import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from 'src/app/shared/services/photos.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent {

  photoId: string | null;

  constructor(private activeRoute: ActivatedRoute, private photosService: PhotosService) {
    this.photoId = this.activeRoute.snapshot.paramMap.get("id");
  }

  computePhotoURL(height: number = 800, width: number = 1200) {
    return `https://picsum.photos/id/${this.photoId}/${height}/${width}`;
  }

  removeFromFavourites() {
    this.photosService.deleteFromFavourites.next(this.photoId);
    alert("Photo removed form favourites!");
  }

}
