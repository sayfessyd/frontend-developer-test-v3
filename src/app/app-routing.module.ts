import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  { path: '', component: PhotosComponent, pathMatch: 'full' },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'photos/:id', component: SingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
