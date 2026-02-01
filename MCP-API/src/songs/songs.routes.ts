import { Router } from 'express';
import * as SongsController from './songs.controller';

const router = Router();

/**
 * ---------------------------
 * Base Read
 * ---------------------------
 */
router
  .route('/songs')
  .get(SongsController.readSongs);

/**
 * ---------------------------
 * Search
 * ---------------------------
 */
router
  .route('/songs/search/:search')
  .get(SongsController.searchSongs);

/**
 * ---------------------------
 * Filter Queries (NOT search)
 * ---------------------------
 */
router
  .route('/songs/artist/:artist')
  .get(SongsController.readSongsByArtist);

router
  .route('/songs/album/id/:albumId')
  .get(SongsController.readSongsByAlbumId);

router
  .route('/songs/album/title/:title')
  .get(SongsController.readSongsByAlbumTitle);

router
  .route('/songs/year/:year')
  .get(SongsController.readSongsByYear);

/**
 * ---------------------------
 * CRUD Operations
 * ---------------------------
 */
router
  .route('/songs')
  .post(SongsController.createSong);

router
  .route('/songs/:songId')
  .put(SongsController.updateSong);

router
  .route('/songs/:songId')
  .get(SongsController.readSongById);

router
  .route('/songs/:songId')
  .delete(SongsController.deleteSong);

export default router;
