import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavouritesComponent } from '../favourites/favourites.component';
import { PhotosComponent } from '../photos/photos.component';

import { SingleComponent } from './single.component';

describe('SingleComponent', () => {
  let component: SingleComponent;
  let fixture: ComponentFixture<SingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect photoId to be null at first', () => {
    expect(component.photoId).toBeNull();
  });

  it('should calculate URL', () => {
    component.photoId = "100";
    expect(component.computePhotoURL(500, 600)).toBe("https://picsum.photos/id/100/500/600");
  });
});
