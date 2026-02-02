import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../models/songs.model';
import { MusicServiceService } from '../services/music-service.service';

@Component({
  selector: 'app-song-update',
  standalone: false,
  templateUrl: './song-update.component.html',
  styleUrls: ['./song-update.component.css']
})
export class SongUpdateComponent implements OnInit {

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

  wasSubmitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const songId = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getSongById(songId, (song: Song) => {
      this.song = song;

      console.log(this.song);
    });
  }

  public onSubmit(): void {
    this.service.updateSong(this.song, () => {
      console.log('Song updated successfully.');
      this.router.navigate(['/songs', this.song.song_id]);
    });

    this.wasSubmitted = true;
  }
}
