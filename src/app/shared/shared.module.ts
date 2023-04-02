import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { PhotosService } from './services/photos.service';
import { PhotoSizePipe } from './pipes/photo-size.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    PhotoSizePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    PhotoSizePipe,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [
    PhotosService
  ]
})
export class SharedModule { }
