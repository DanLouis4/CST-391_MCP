import { Component, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { Song } from '../models/songs.model';
import { MusicServiceService } from '../services/music-service.service';

@Component({
  selector: 'app-album-list',
  standalone: false,
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];
  expandedAlbumId: number | null = null;
  albumSongs: { [album_id: number]: Song[] } = {};

  constructor(private musicService: MusicServiceService) { }

  ngOnInit(): void {
    this.musicService.getAlbums((albums) => {
      this.albums = albums;
    });
  }
toggleSongs(albumId: number): void {

  // Collapse if already open
  if (this.expandedAlbumId === albumId) {
    this.expandedAlbumId = null;
    return;
  }

  this.expandedAlbumId = albumId;

  // Load songs only once per album
  if (!this.albumSongs[albumId]) {
    this.musicService.getSongsByAlbumId(albumId, (songs: Song[]) => {
      this.albumSongs[albumId] = songs;
    });
  }
}

deleteAlbum(albumId: number): void {
    if (!confirm('Delete this album?')) return;

    this.musicService.deleteAlbum(albumId, () => {
      this.albums = this.albums.filter(album => album.album_id !== albumId);
    });
  }


}
