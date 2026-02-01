export const songQueries = {

    // ---------------------------
    // Base CRUD Queries
    // ---------------------------

    createSong: `
        INSERT INTO songs
            (title, artist, genre, lyrics, video_url, streaming_url, notes, album_id, theme_id)
        VALUES
            (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,

    readSongs: `
        SELECT
            songs.song_id,
            songs.title AS song_title,
            songs.artist,
            songs.genre,
            songs.lyrics,
            songs.video_url,
            songs.streaming_url,
            songs.notes,
            songs.album_id,
            songs.theme_id,
            songs.created_at,
            songs.updated_at,

            albums.title AS album_title,
            albums.release_year,
            albums.artwork_url,

            theme.name AS theme_name
        FROM songs
        JOIN albums
            ON songs.album_id = albums.album_id
        LEFT JOIN theme
            ON songs.theme_id = theme.theme_id
    `,

    readSongById: `
        SELECT
            songs.song_id,
            songs.title AS song_title,
            songs.artist,
            songs.genre,
            songs.lyrics,
            songs.video_url,
            songs.streaming_url,
            songs.notes,
            songs.album_id,
            songs.theme_id,
            songs.created_at,
            songs.updated_at,

            albums.title AS album_title,
            albums.release_year,
            albums.artwork_url,

            theme.name AS theme_name
        FROM songs
        JOIN albums
            ON songs.album_id = albums.album_id
        LEFT JOIN theme
            ON songs.theme_id = theme.theme_id
        WHERE songs.song_id = ?
    `,

    updateSong: `
        UPDATE songs
        SET
            title = ?,
            artist = ?,
            genre = ?,
            lyrics = ?,
            video_url = ?,
            streaming_url = ?,
            notes = ?,
            album_id = ?,
            theme_id = ?
        WHERE song_id = ?
    `,

    deleteSong: `
        DELETE FROM songs
        WHERE song_id = ?
    `,

    // ---------------------------
    // Search Queries
    // ---------------------------

    searchSongs: `
        SELECT
            songs.song_id,
            songs.title AS song_title,
            songs.artist,
            songs.genre,
            songs.lyrics,
            songs.video_url,
            songs.streaming_url,
            songs.notes,
            songs.album_id,
            songs.theme_id,
            songs.created_at,
            songs.updated_at,

            albums.title AS album_title,
            albums.release_year,
            albums.artwork_url,

            theme.name AS theme_name
        FROM songs
        JOIN albums
            ON songs.album_id = albums.album_id
        LEFT JOIN theme
            ON songs.theme_id = theme.theme_id
        WHERE songs.title LIKE ?
           OR albums.title LIKE ?
           OR songs.artist LIKE ?
           OR songs.genre LIKE ?
           OR songs.lyrics LIKE ?
           OR songs.notes LIKE ?
    `,

    // ---------------------------
    // Filter Queries (NOT search)
    // ---------------------------

    readSongsByArtist: `
        SELECT
            songs.song_id,
            songs.title AS song_title,
            songs.artist,
            songs.genre,
            songs.lyrics,
            songs.video_url,
            songs.streaming_url,
            songs.notes,
            songs.album_id,
            songs.theme_id,
            songs.created_at,
            songs.updated_at,

            albums.title AS album_title,
            albums.release_year,
            albums.artwork_url,

            theme.name AS theme_name
        FROM songs
        JOIN albums
            ON songs.album_id = albums.album_id
        LEFT JOIN theme
            ON songs.theme_id = theme.theme_id
        WHERE songs.artist = ?
    `,

    readSongsByAlbumId: `
        SELECT
            songs.song_id,
            songs.title AS song_title,
            songs.artist,
            songs.genre,
            songs.lyrics,
            songs.video_url,
            songs.streaming_url,
            songs.notes,
            songs.album_id,
            songs.theme_id,
            songs.created_at,
            songs.updated_at,

            albums.title AS album_title,
            albums.release_year,
            albums.artwork_url,

            theme.name AS theme_name
        FROM songs
        JOIN albums
            ON songs.album_id = albums.album_id
        LEFT JOIN theme
            ON songs.theme_id = theme.theme_id
        WHERE songs.album_id = ?
    `,

    readSongsByAlbumTitle: `
        SELECT
            s.song_id,
            s.title AS song_title,
            s.artist,
            s.genre,
            s.lyrics,
            s.video_url,
            s.streaming_url,
            s.notes,
            s.album_id,
            s.theme_id,
            s.created_at,
            s.updated_at,

            a.title AS album_title,
            a.release_year,
            a.artwork_url,

            t.name AS theme_name
        FROM songs s
        JOIN albums a
            ON s.album_id = a.album_id
        LEFT JOIN theme t
            ON s.theme_id = t.theme_id
        WHERE a.title = ?
    `,

    readSongsByYear: `
        SELECT
            songs.song_id,
            songs.title AS song_title,
            songs.artist,
            songs.genre,
            songs.lyrics,
            songs.video_url,
            songs.streaming_url,
            songs.notes,
            songs.album_id,
            songs.theme_id,
            songs.created_at,
            songs.updated_at,

            albums.title AS album_title,
            albums.release_year,
            albums.artwork_url,

            theme.name AS theme_name
        FROM songs
        JOIN albums
            ON songs.album_id = albums.album_id
        LEFT JOIN theme
            ON songs.theme_id = theme.theme_id
        WHERE albums.release_year = ?
    `
};
