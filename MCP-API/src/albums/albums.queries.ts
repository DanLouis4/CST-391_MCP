import { readAlbums } from "../albums/albums.dao";

export const albumQueries = {

    // ---------------------------
    // Base CRUD Queries
    // ---------------------------

    createAlbum: `
        INSERT INTO albums (title, artist, release_year, artwork_url)
        VALUES (?, ?, ?, ?)`,

    readAlbums: `
        SELECT album_id, title, artist, release_year,artwork_url, created_at, updated_at
        FROM mcp_db.albums`,

    updateAlbum: `
        UPDATE albums
        SET title = ?, artist = ?, release_year = ?, artwork_url = ?
        WHERE album_id = ?`,

    deleteAlbum: `
        DELETE FROM albums
        WHERE album_id = ?
        AND NOT EXISTS (SELECT 1 FROM songs WHERE songs.album_id = albums.album_id)`,

    // ---------------------------
    // Search Queries
    // ---------------------------

    searchAlbums: `
        SELECT *
        FROM albums
        WHERE title LIKE ?
           OR artist LIKE ?`,

    // ---------------------------
    // Filter Queries (NOT search)
    // ---------------------------

    readAlbumsByArtist: `
        SELECT *
        FROM albums
        WHERE artist = ?`,

    readAlbumByAlbumId: `
        SELECT *
        FROM albums
        WHERE album_id = ?`,

    readAlbumsByAlbumTitle: `
        SELECT *
        FROM albums
        WHERE title = ?`,

    readAlbumsByYear: `
        SELECT *
        FROM albums
        WHERE release_year = ?`
};