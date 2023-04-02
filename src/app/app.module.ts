import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotosComponent } from './pages/photos/photos.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { SingleComponent } from './pages/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    FavouritesComponent,
    SingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
