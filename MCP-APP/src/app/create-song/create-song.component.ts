import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../services/music-service.service';
import { Song } from '../models/songs.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-song',
  standalone: false,
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {

  song: Song = {
    // keep ONLY fields the user actually enters / your API expects
    song_title: '',
    artist: '',
    genre: '',
    lyrics: '',
    album_id: 0,

    // include these only if your API/DB actually supports them
    video_url: '',
    streaming_url: '',
    notes: '',
    theme_id: 0
  };

  constructor(private musicService: MusicServiceService, private router: Router) {}

  ngOnInit(): void {
  }

  public onSubmit() {

    // Logic to create a new song using the newSong object
    console.log('Creating song:', this.song);
    this.musicService.createSong(this.song, (createdSong) => {
      console.log('Song created:', createdSong);
      this.router.navigate(['/songs']);
    });

  }

}

