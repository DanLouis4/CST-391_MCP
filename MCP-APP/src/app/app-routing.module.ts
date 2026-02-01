import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SongCreateComponent } from './song-create/song-create.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongDisplayComponent } from './song-display/song-display.component';
import { SongUpdateComponent } from './song-update/song-update.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumUpdateComponent } from './album-update/album-update.component';
import { AlbumDisplayComponent } from './album-display/album-display.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route for home page
  { path: 'search', component: SearchComponent }, // Route for search functionality'

  { path: 'songs/create', component: SongCreateComponent }, // Route for creating a new song
  { path: 'songs', component: SongListComponent }, // Route for listing songs
  { path: 'songs/:id', component: SongDisplayComponent }, // Route for displaying a specific song\
  { path: 'songs/update/:id', component: SongUpdateComponent }, // Route for listing songs by album

  { path: 'albums', component: AlbumListComponent }, // Route for listing albums
  { path: 'albums/:id', component: AlbumDisplayComponent }, // Route for displaying a specific album
  { path: 'albums/update/:id', component: AlbumUpdateComponent } // Route for updating a specific album


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
