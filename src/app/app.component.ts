import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PhotosService } from './shared/services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'frontend-developer-test-v3';

  // @ViewChild('loader') loader: any;

  show: boolean = false;

  constructor(private photoService: PhotosService) {
    photoService.photosLoader.subscribe((show: any) => {
      this.show = show;
      // if (show) {
      //   this.loader.nativeElement.style.display = "block";
      // } else {
      //   this.loader.nativeElement.style.display = "none";
      // }
    })
  }

  ngAfterViewInit() { }

}
