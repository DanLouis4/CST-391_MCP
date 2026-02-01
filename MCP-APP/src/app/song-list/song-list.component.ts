import { Component, OnInit } from '@angular/core';
import { Song } from '../models/songs.model';
import { MusicServiceService } from '../services/music-service.service';

@Component({
  selector: 'app-song-list',
  standalone: false,
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];

  constructor(private musicService: MusicServiceService) { }

  deleteSong(id: number): void {
    if (!confirm('Delete this song?')) return;

    this.musicService.deleteSong(id, () => {
      this.songs = this.songs.filter(song => song.song_id !== id);
    });
  }

  ngOnInit(): void {
    this.musicService.getSongs(data => {
      this.songs = data;
      console.log(this.songs);
    });
  }
}

