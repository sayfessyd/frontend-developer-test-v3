import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get favourites', () => {
    expect(service.getFavourites()).toBeInstanceOf(Array);
  });

  it('should retrieve photos', waitForAsync(() => {
    service.retrievePhotosList().subscribe((data: any) => {
      expect(data.length).toBe(12);
    })
  }));

  it('should photos have download_url', waitForAsync(() => {
    service.retrievePhotosList().subscribe((data: any) => {
      expect(data.map((photo: any) => photo.download_url)).toBeDefined();
    })
  }));
});
