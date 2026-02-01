import { Injectable } from '@angular/core';
import { Song } from './../models/songs.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {

constructor(private http: HttpClient) { }

private host = 'http://localhost:3000';

getSongs(callback: (songs: Song[]) => void): void {
  this.http.get<Song[]>(`${this.host}/songs`)
    .subscribe(data => callback(data));
}

getSongById(id: number, callback: (song: any) => void): void {
  this.http
    .get<any>(`${this.host}/songs/${id}`)
    .subscribe(song => callback(song));
}

public createSong(song: Song, callback: (createdSong: Song) => void): void {
  this.http
    .post<Song>(`${this.host}/songs`, song)
    .subscribe(createdSong => callback(createdSong));
}

public updateSong(id: number, song: Song, callback: (updatedSong: Song) => void): void {
  this.http
    .put<Song>(`${this.host}/songs/${id}`, song)
    .subscribe(updatedSong => callback(updatedSong));
}

public deleteSong(id: number, callback: () => void): void {
  this.http.delete(this.host + "/songs/" + id)
   .subscribe((data) => {
      callback();
    });
}
}
