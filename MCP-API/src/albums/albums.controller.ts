import { Request, RequestHandler, Response } from "express";
import { Album } from "./albums.model";
import * as AlbumDao from "./albums.dao";
import { OkPacket } from "mysql";


/* ---------------------------
   Create
--------------------------- */

export const createAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await AlbumDao.createAlbum(req.body);

        console.log('req.body', req.body);
        console.log('album', okPacket);

        res.status(200).json(okPacket);

    } catch (error) {
        console.error('[albums.controller][createAlbum][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when creating albums'
        });
    }
};


/* ---------------------------
   Read (All / By ID)
--------------------------- */

export const readAlbums: RequestHandler = async (req: Request, res: Response) => {
    try {
        let albums;
        let albumId = parseInt(req.query.albumId as string);

        console.log('albumId', albumId);

        if (Number.isNaN(albumId)) {
            albums = await AlbumDao.readAlbums();
        } else {
            albums = await AlbumDao.readAlbumById(albumId);
        }

        res.status(200).json(albums);

    } catch (error) {
        console.error('[albums.controller][readAlbums][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching albums'
        });
    }
};

export const readAlbumById: RequestHandler = async (req: Request, res: Response) => {
    try {
        let albumId = parseInt(req.params.albumId as string);

        console.log('albumId', albumId);

        if (!Number.isNaN(albumId)) {
            const albums = await AlbumDao.readAlbumById(albumId);
            res.status(200).json(albums);
        } else {
            throw new Error('Integer expected for albumId');
        }

    } catch (error) {
        console.error('[albums.controller][readAlbumById][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching the album'
        });
    }
};


/* ---------------------------
   Search
--------------------------- */

export const searchAlbums: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);

        const albums = await AlbumDao.searchAlbums('%' + req.params.search + '%');

        res.status(200).json(albums);

    } catch (error) {
        console.error('[albums.controller][searchAlbums][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when searching albums'
        });
    }
};


/* ---------------------------
   Filters (NOT search)
--------------------------- */

export const readAlbumsByArtist: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { artist } = req.params;

        if (Array.isArray(artist) || typeof artist !== 'string' || artist.trim() === '') {
            return res.status(400).json({ error: 'artist param required as string' });
        }

        const albums = await AlbumDao.readAlbumsByArtist(artist);
        res.status(200).json(albums);

    } catch (error) {
        console.error('[albums.controller][readAlbumsByArtist][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching albums by artist'
        });
    }
};

export const readAlbumsByAlbumTitle: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { title } = req.params;

        if (Array.isArray(title) || typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({ error: 'title param required as string' });
        }

        const albums = await AlbumDao.readAlbumsByAlbumTitle(title);
        res.status(200).json(albums);

    } catch (error) {
        console.error('[albums.controller][readAlbumsByAlbumTitle][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching albums by title'
        });
    }
};

export const readAlbumsByYear: RequestHandler = async (req: Request, res: Response) => {
    try {
        let year = parseInt(req.params.year as string);

        console.log('year', year);

        if (!Number.isNaN(year)) {
            const albums = await AlbumDao.readAlbumsByYear(year);
            res.status(200).json(albums);
        } else {
            throw new Error('Integer expected for year');
        }

    } catch (error) {
        console.error('[albums.controller][readAlbumsByYear][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching albums by year'
        });
    }
};


/* ---------------------------
   Update
--------------------------- */

export const updateAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await AlbumDao.updateAlbum(req.body);

        res.status(200).json(okPacket);

    } catch (error) {
        console.error('[albums.controller][updateAlbum][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when updating albums'
        });
    }
};


/* ---------------------------
   Delete
--------------------------- */

export const deleteAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        let albumId = parseInt(req.params.albumId as string);

        console.log('albumId', albumId);

        if (!Number.isNaN(albumId)) {
            const response = await AlbumDao.deleteAlbum(albumId);
            res.status(200).json(response);
        } else {
            throw new Error('Integer expected for albumId');
        }

    } catch (error) {
        console.error('[albums.controller][deleteAlbum][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when deleting albums'
        });
    }
};
