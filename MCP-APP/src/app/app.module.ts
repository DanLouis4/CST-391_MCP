import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongDisplayComponent } from './song-display/song-display.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SongCreateComponent } from './song-create/song-create.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { SongUpdateComponent } from './song-update/song-update.component';
import { AlbumUpdateComponent } from './album-update/album-update.component';
import { AlbumDisplayComponent } from './album-display/album-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongDisplayComponent,
    SearchComponent,
    HomeComponent,
    SongCreateComponent,
    AlbumListComponent,
    SongUpdateComponent,
    AlbumUpdateComponent,
    AlbumDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
