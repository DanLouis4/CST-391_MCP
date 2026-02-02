import { Request, RequestHandler, Response } from "express";
import { Song } from "./songs.model";
import * as SongDao from "./songs.dao";
import * as AlbumDao from "../albums/albums.dao";
import { OkPacket } from "mysql";


/* ---------------------------
   Create - validate album exists before creating song, otherwise create a new album
--------------------------- */

export const createSong: RequestHandler = async (req: Request, res: Response) => {
  try {
    const {
      song_title,
      artist,
      genre,
      lyrics,
      video_url,
      streaming_url,
      notes,
      theme_id,

      // for album resolution
      album_title,
      release_year,
      artwork_url
    } = req.body;

    // Minimal validation for the workflow
    if (!song_title || typeof song_title !== "string" || song_title.trim() === "") {
      return res.status(400).json({ message: "song_title is required" });
    }

    if (!artist || typeof artist !== "string" || artist.trim() === "") {
      return res.status(400).json({ message: "artist is required" });
    }

    if (!album_title || typeof album_title !== "string" || album_title.trim() === "") {
      return res.status(400).json({ message: "album_title is required" });
    }

    // ---------------------------------
    // 1) Find album by title
    // ---------------------------------
    const albumsByTitle = await AlbumDao.readAlbumsByAlbumTitle(album_title);

    let resolvedAlbum = albumsByTitle.find(a =>
      (a.artist ?? "").toLowerCase() === artist.toLowerCase()
    );

    // ---------------------------------
    // 2) If not found in title list, check artist list and intersect
    // ---------------------------------
    if (!resolvedAlbum) {
      const albumsByArtist = await AlbumDao.readAlbumsByArtist(artist);

      resolvedAlbum = albumsByArtist.find(a =>
        (a.title ?? "").toLowerCase() === album_title.toLowerCase()
      );
    }

    // ---------------------------------
    // 3) If still not found, create album
    // ---------------------------------
    let albumId: number;

    if (!resolvedAlbum) {
      const albumOk: OkPacket = await AlbumDao.createAlbum({
        title: album_title,
        artist: artist,
        release_year: release_year ?? null,
        artwork_url: artwork_url ?? null
      } as any);

      albumId = albumOk.insertId;
    } else {
      albumId = resolvedAlbum.album_id;
    }

    // ---------------------------------
    // 4) Create song using resolved album_id
    // ---------------------------------
    const songOk: OkPacket = await SongDao.createSong({
      song_title,
      artist,
      genre,
      lyrics,
      video_url,
      streaming_url,
      notes,
      album_id: albumId,
      theme_id,
      song_id: 0
    });

    return res.status(201).json({
      song_id: songOk.insertId,
      album_id: albumId
    });

  } catch (error) {
    console.error("[songs.controller][createSong][Error]: ", error);
    return res.status(500).json({
      message: "There was an error when creating the song"
    });
  }
};

/* ---------------------------
   Read (All / By ID)
--------------------------- */

export const readSongs: RequestHandler = async (req: Request, res: Response) => {
    try {
        let songs;
        let songId = parseInt(req.query.songId as string);

        console.log('songId', songId);

        if (Number.isNaN(songId)) {
            songs = await SongDao.readSongs();
        } else {
            songs = await SongDao.readSongById(songId);
        }

        res.status(200).json(songs);

    } catch (error) {
        console.error('[songs.controller][readSongs][Error]: ', error);
        res.status(500).json({message: 'There was an error when fetching songs'});
    }
};

export const readSongById: RequestHandler = async (req: Request, res: Response) => {
    try {
        let songId = parseInt(req.params.songId as string);

        console.log('songId', songId);

        if (!Number.isNaN(songId)) {
            const songs = await SongDao.readSongById(songId);
            res.status(200).json(songs);
        } else {
            throw new Error('Integer expected for songId');
        }

    } catch (error) {
        console.error('[songs.controller][readSongById][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching the song'
        });
    }
};


/* ---------------------------
   Search
--------------------------- */

export const searchSongs: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);

        const songs = await SongDao.searchSongs('%' + req.params.search + '%');

        res.status(200).json(songs);

    } catch (error) {
        console.error('[songs.controller][searchSongs][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when searching songs'
        });
    }
};


/* ---------------------------
   Filters (NOT search)
--------------------------- */

export const readSongsByArtist: RequestHandler = async (req: Request, res: Response) => {
    try {

        
        const { artist } = req.params;
        if (Array.isArray(artist) || typeof artist !== 'string' || artist.trim() === '') {
            return res.status(400).json({ error: 'artist param required as string' });
        }
        const songs = await SongDao.readSongsByArtist(artist);
        res.status(200).json(songs);

    } catch (error) {
        console.error('[songs.controller][readSongsByArtist][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching songs by artist'
        });
    }
};

export const readSongsByAlbumId: RequestHandler = async (req: Request, res: Response) => {
    try {
        let albumId = parseInt(req.params.albumId as string);

        console.log('albumId', albumId);

        if (!Number.isNaN(albumId)) {
            const songs = await SongDao.readSongsByAlbumId(albumId);
            res.status(200).json(songs);
        } else {
            throw new Error('Integer expected for albumId');
        }

    } catch (error) {
        console.error('[songs.controller][readSongsByAlbumId][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching songs by albumId'
        });
    }
};

export const readSongsByAlbumTitle: RequestHandler = async (req: Request, res: Response) => {
    try {
        const  { title } = req.params;
        
        if (Array.isArray(title) || typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({ error: 'artist param required as string' });
        }

        const songs = await SongDao.readSongsByAlbumTitle(title);
        res.status(200).json(songs);

    } catch (error) {
        console.error('[songs.controller][readSongsByAlbumTitle][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching songs by album title'
        });
    }
};

export const readSongsByYear: RequestHandler = async (req: Request, res: Response) => {
    try {
        let year = parseInt(req.params.year as string);

        console.log('year', year);

        if (!Number.isNaN(year)) {
            const songs = await SongDao.readSongsByYear(year);
            res.status(200).json(songs);
        } else {
            throw new Error('Integer expected for year');
        }

    } catch (error) {
        console.error('[songs.controller][readSongsByYear][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching songs by year'
        });
    }
};


/* ---------------------------
   Update
--------------------------- */

export const updateSong: RequestHandler = async (req: Request, res: Response) => {
    try {
        const song = {...req.body, song_id: Number(req.params.songId)};
    
        const okPacket: OkPacket = await SongDao.updateSong(song);

        res.status(200).json(okPacket);

    } catch (error) {
        console.error('[songs.controller][updateSong][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when updating songs'
        });
    }
};


/* ---------------------------
   Delete
--------------------------- */

export const deleteSong: RequestHandler = async (req: Request, res: Response) => {
    try {
        let songId = parseInt(req.params.songId as string);

        console.log('songId', songId);

        if (!Number.isNaN(songId)) {
            const response = await SongDao.deleteSong(songId);
            res.status(200).json(response);
        } else {
            throw new Error('Integer expected for songId');
        }

    } catch (error) {
        console.error('[songs.controller][deleteSong][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when deleting songs'
        });
    }
};
