import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSongsComponent } from './list-songs/list-songs.component';
import { DisplaySongsComponent } from './display-songs/display-songs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { CreateSongComponent } from './create-song/create-song.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSongsComponent,
    DisplaySongsComponent,
    SearchComponent,
    HomeComponent,
    CreateSongComponent
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
