import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private page = 0;

  private favourites: any[] = [];

  public getFavourites() {
    return this.favourites;
  }

  public addToFavourites = new Subject();

  public deleteFromFavourites = new Subject();

  public photosLoader = new Subject();

  constructor(private http: HttpClient) {
    this.bootstrapFavourites();
  }

  retrievePhotosList() {
    this.page += 1;

    const computeListPhotosURL = function (page: number, limit: number = 12) {
      return `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
    }

    const randomDelay = function (min: number = 200, max: number = 300) {
      let difference = max - min;
      let random = Math.random();
      random = Math.floor(random * difference);
      random = random + min;
      return random;
    }

    return new Observable((observer) => {
      this.photosLoader.next(true);
      let delay = randomDelay();
      setTimeout(() => {
        this.http.get(computeListPhotosURL(this.page)).subscribe((data) => {
          observer.next(data);
          this.photosLoader.next(false);
        });
      }, delay);
    });
  }

  private bootstrapFavourites() {
    var storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites && this.favourites.length == 0) {
      this.favourites = JSON.parse(storedFavourites).list;
    }

    const addCallback = (value: any) => {
      if (value) {
        this.favourites.push(value);
        let object = {
          list: this.favourites
        };
        localStorage.setItem("favourites", JSON.stringify(object));
      }
    }

    const deleteCallback = (photoId: any) => {
      if (photoId) {
        let photoIndex = this.favourites.findIndex((favourite) => {
          return favourite.id == photoId;
        })

        if (photoIndex > -1) {
          this.favourites.splice(photoIndex, 1);
        }
        let object = {
          list: this.favourites
        };
        localStorage.setItem("favourites", JSON.stringify(object));
      }
    }

    this.addToFavourites.subscribe(addCallback);
    this.deleteFromFavourites.subscribe(deleteCallback);
  }

}
