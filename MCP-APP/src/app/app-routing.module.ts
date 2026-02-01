import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ListSongsComponent } from './list-songs/list-songs.component';
import { DisplaySongsComponent } from './display-songs/display-songs.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route for home page
  { path: 'search', component: SearchComponent }, // Route for search functionality'

  { path: 'songs', component: ListSongsComponent }, // Route for listing songs
  { path: 'songs/:id', component: DisplaySongsComponent }, // Route for displaying a specific song
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
