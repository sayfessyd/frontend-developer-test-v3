import { Component, ElementRef, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/shared/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: any = [];

  constructor(private photosService: PhotosService, private element: ElementRef) { }

  ngOnInit() {
    this.pushPhotosList();

    const debounce = (func: any, timeout = 300) => {
      let timer: any;
      return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    };

    window.addEventListener("scroll", debounce(this.scrollHandler));
  }

  pushPhotosList(): void {
    this.photosService.retrievePhotosList().subscribe((data: any) => {
      this.photos = [...this.photos, ...data];
    });
  }

  addToFavourites(index: number): void {
    this.photosService.addToFavourites.next(this.photos[index]);
    alert("Photo added to favourites!");
  }

  scrollHandler() {
    let offsetHeight = (this.element.nativeElement as HTMLElement).offsetHeight;

    const endOfPage = offsetHeight > 0 ? window.innerHeight + window.pageYOffset >= offsetHeight : false;

    if (endOfPage) {
      this.pushPhotosList();
    }
  }

}
