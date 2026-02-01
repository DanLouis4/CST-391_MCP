import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../services/music-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-song-display',
  standalone: false,
  templateUrl: './song-display.component.html',
  styleUrls: ['./song-display.component.css']
})
export class SongDisplayComponent implements OnInit {

  song: any;
  safeVideoUrl?: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.musicService.getSongById(id, data => {
      this.song = data[0];

      if (this.song.video_url) {
        const videoId = this.extractYouTubeId(this.song.video_url);
        if (videoId) {
          this.safeVideoUrl =
          this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${videoId}`
          );
        }
      }
        console.log(this.song);
    });
  }

  extractYouTubeId(url: string): string | null {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
}
