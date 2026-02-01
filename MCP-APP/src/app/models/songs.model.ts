export interface Song {
    song_id?: number;
    song_title: string;
    artist: string;
    genre: string;
    lyrics: string;
    video_url: string;
    streaming_url: string;
    notes: string;
    album_id: number;
    theme_id: number;
    created_at?: string;
    updated_at?: string;

    // album fields returned by API
    album_title?: string;
    release_year?: number;
    artwork_url?: string;

    // theme fields returned by API
    theme_name?: string;
}
