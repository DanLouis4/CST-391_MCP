import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../models/albums.model';
import { MusicServiceService } from '../services/music-service.service';

@Component({
  selector: 'app-album-update',
  standalone: false,
  templateUrl: './album-update.component.html',
  styleUrls: ['./album-update.component.css']
})
export class AlbumUpdateComponent implements OnInit {

  album: Album = {
    title: '',
    artist: '',
    release_year: 0,
    artwork_url: ''
  };
  wasSubmitted: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getAlbumById(+id, (album: Album) => {
        this.album = album;
      });
    }
  }

  public onSubmit(): void {
    this.service.updateAlbum(this.album, () => {
      console.log('Album updated successfully.');
      this.router.navigate(['/albums', this.album.album_id]);
    });
  }
}
