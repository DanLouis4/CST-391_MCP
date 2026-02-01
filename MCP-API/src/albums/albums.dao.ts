import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Album } from "./albums.model";
import { albumQueries } from "./albums.queries";


/* ---------------------------
   Base CRUD Operations
--------------------------- */

export const createAlbum = async (album: Album) => {
    return execute<OkPacket>(albumQueries.createAlbum, [album.title, album.artist, album.release_year, album.artwork_url]);
};

export const readAlbums = async () => {
    return execute<Album[]>(albumQueries.readAlbums, []);
};

export const readAlbumById = async (albumId: number) => {
    return execute<Album[]>(albumQueries.readAlbumByAlbumId, [albumId]);
};

export const updateAlbum = async (album: Album) => {
    return execute<OkPacket>(albumQueries.updateAlbum, [album.title, album.artist, album.release_year, album.artwork_url, album.album_id]);
};

export const deleteAlbum = async (albumId: number) => {
    return execute<OkPacket>(albumQueries.deleteAlbum, [albumId]);
};


/* ---------------------------
   Search Operations
--------------------------- */

export const searchAlbums = async (searchTerm: string) => {
    const wildcard = `%${searchTerm}%`;
    return execute<Album[]>(albumQueries.searchAlbums, [wildcard, wildcard]);
};


/* ---------------------------
   Filter Operations
--------------------------- */

export const readAlbumsByArtist = async (artist: string) => {
    return execute<Album[]>(albumQueries.readAlbumsByArtist, [artist]);
};

export const readAlbumsByAlbumTitle = async (title: string) => {
    return execute<Album[]>(albumQueries.readAlbumsByAlbumTitle, [title]);
};

export const readAlbumsByYear = async (releaseYear: number) => {
    return execute<Album[]>(albumQueries.readAlbumsByYear, [releaseYear]);
};
