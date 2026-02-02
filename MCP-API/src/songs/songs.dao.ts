import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Song } from "./songs.model";
import { songQueries } from "./songs.queries";


/* ---------------------------
   Base CRUD Operations
--------------------------- */

export const createSong = async (song: Song) => {
    return execute<OkPacket>(
        songQueries.createSong,
        [song.song_title, song.artist, song.genre, song.lyrics, song.video_url, song.streaming_url, song.notes, song.album_id, song.theme_id]
    );
};

export const readSongs = async () => {
    return execute<Song[]>(songQueries.readSongs, []);
};

export const readSongById = async (songId: number) => {
    return execute<Song[]>(songQueries.readSongById, [songId]);
};

export const updateSong = async (song: Song) => {
    return execute<OkPacket>(
        songQueries.updateSong,
        [song.song_title, song.artist, song.genre, song.lyrics, song.video_url, song.streaming_url, song.notes, song.album_id, song.theme_id, song.song_id]
    );
};

export const deleteSong = async (songId: number) => {
    return execute<OkPacket>(songQueries.deleteSong, [songId]);
};


/* ---------------------------
   Search Operations
--------------------------- */

export const searchSongs = async (searchTerm: string) => {
    const wildcard = `%${searchTerm}%`;
    return execute<Song[]>(songQueries.searchSongs, [wildcard, wildcard, wildcard, wildcard, wildcard, wildcard, wildcard, wildcard, wildcard]);
};


/* ---------------------------
   Filter Operations
--------------------------- */

export const readSongsByArtist = async (artist: string) => {
    return execute<Song[]>(songQueries.readSongsByArtist, [artist]);
};

export const readSongsByAlbumId = async (albumId: number) => {
    return execute<Song[]>(songQueries.readSongsByAlbumId, [albumId]);
};

export const readSongsByAlbumTitle = async (albumTitle: string) => {
    return execute<Song[]>(songQueries.readSongsByAlbumTitle, [albumTitle]);
};

export const readSongsByYear = async (releaseYear: number) => {
    return execute<Song[]>(songQueries.readSongsByYear, [releaseYear]);
};
