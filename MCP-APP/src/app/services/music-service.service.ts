import { Injectable } from '@angular/core';
import { Song } from './../models/songs.model';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/albums.model';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {

constructor(private http: HttpClient) { }

private host = 'http://localhost:3000';

/* ---------------------/
  Song methods
-------------------- */

// Get all songs
getSongs(callback: (songs: Song[]) => void): void {
  this.http.get<Song[]>(this.host  + `/songs`)
    .subscribe(data => callback(data));
}

// Get song by ID
getSongById(id: number, callback: (song: Song) => void): void {
  this.http
    .get<Song[]>(this.host + `/songs/${id}`)
    .subscribe((result) => callback(result[0]));
}

// Get songs by Album ID
public getSongsByAlbumId(
  albumId: number,
  callback: (songs: Song[]) => void): void {
  this.http
    .get<Song[]>(this.host + `/songs/album/id/${albumId}`)
    .subscribe({
      next: (songs) => callback(songs),
      error: (err) => console.error('Error loading songs for album', err)
    });
}

// Create a new song
public createSong(song: Song, callback: (createdSong: Song) => void): void {
  this.http
    .post<Song>(this.host + `/songs`, song)
    .subscribe(createdSong => callback(createdSong));
}

// Update an existing song
updateSong(song: Song, callback: () => void): void {
  this.http.put(this.host + `/songs/${song.song_id}`, song)
    .subscribe(() => callback());
}

// Delete a song
public deleteSong(id: number, callback: () => void): void {
  this.http.delete(this.host + "/songs/" + id)
   .subscribe((data) => {
      callback();
    });
}

/* ---------------------/
  Album methods
-------------------- */

// Get all albums
public getAlbums(callback: (albums: Album[]) => void): void {
  this.http.get<Album[]>(this.host + "/albums")
    .subscribe({
      next: (albums) => callback(albums),
      error: (err) => console.error('Error loading albums', err)
    });
}

// Get album by ID
public getAlbumById(id: number, callback: (album: Album) => void): void {
  this.http.get<Album[]>(this.host + `/albums/${id}`)
  .subscribe((result) => callback(result[0]));
}

// Update an existing album
updateAlbum(album: Album, callback: () => void): void {
  this.http.put(this.host + `/albums/${album.album_id}`, album)
    .subscribe(() => callback());
}

// Delete an album
public deleteAlbum(id: number, callback: () => void): void {
  this.http.delete(this.host + "/albums/" + id)
   .subscribe((data) => {
      callback();
    });
}
}
