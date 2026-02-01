import { Router } from 'express';
import * as AlbumsController from './albums.controller';

const router = Router();

/**
 * ---------------------------
 * Base Read
 * ---------------------------
 */
router
  .route('/albums')
  .get(AlbumsController.readAlbums);

/**
 * ---------------------------
 * Search
 * ---------------------------
 */
router
  .route('/albums/search/:search')
  .get(AlbumsController.searchAlbums);

/**
 * ---------------------------
 * Filter Queries (NOT search)
 * ---------------------------
 */
router
  .route('/albums/artist/:artist')
  .get(AlbumsController.readAlbumsByArtist);

router
  .route('/albums/title/:title')
  .get(AlbumsController.readAlbumsByAlbumTitle);

router
  .route('/albums/year/:year')
  .get(AlbumsController.readAlbumsByYear);

/**
 * ---------------------------
 * CRUD Operations
 * ---------------------------
 */
router
  .route('/albums')
  .post(AlbumsController.createAlbum);

router
  .route('/albums')
  .put(AlbumsController.updateAlbum);

router
  .route('/albums/:albumId')
  .get(AlbumsController.readAlbumById);

router
  .route('/albums/:albumId')
  .delete(AlbumsController.deleteAlbum);

export default router;
