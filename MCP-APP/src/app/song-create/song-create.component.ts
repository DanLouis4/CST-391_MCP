import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../services/music-service.service';
import { Song } from '../models/songs.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-create',
  standalone: false,
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

  song: Song = {
  song_title: '',
  artist: '',
  genre: '',
  lyrics: '',
  streaming_url: '',
  video_url: '',
  album_title: '',
  release_year: 0,
  artwork_url: '',
  notes: '',
  album_id: 0,
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

