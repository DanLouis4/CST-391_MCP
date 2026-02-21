import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import dataSource from "./data/dataSource";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AlbumList from "./components/albums/AlbumList";
import AlbumForm from "./components/albums/AlbumForm";
import DeleteAlbum from "./components/albums/AlbumDelete";
import SongList from "./components/songs/SongList";
import SongDetails from "./components/songs/SongDetails";
import SongDelete from "./components/songs/SongDelete";
import SongForm from "./components/songs/SongForm";
import SearchPage from "./components/search/SearchPage";

const App = () => {
  const [albumList, setAlbumList] = useState([]);
  const [songList, setSongList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

const loadAlbums = async () => {
  const response = await dataSource.get('/albums');
  setAlbumList(response.data);
};

  const loadSongs = async () => {
    const response = await dataSource.get('/songs');
    setSongList(response.data);
  };

  // Load albums and songs when the component mounts
  useEffect(() => {
    loadAlbums();
    loadSongs();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      {successMessage && (
          <div className="container d-flex justify-content-center mt-3">
            <div className="alert alert-success alert-dismissible fade show">
              {successMessage}
              <button
                type="button"
                className="btn-close"
                onClick={() => setSuccessMessage("")}
              ></button>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<AlbumList albumList={albumList} />} />
          <Route path="/albums/edit/:id" element={<AlbumForm />} />
          <Route path="/albums/delete/:id" element={<DeleteAlbum reloadAlbums={loadAlbums} setSuccessMessage={setSuccessMessage} />} />
          <Route path="/songs" element={<SongList songList={songList} />} />
          <Route path="/songs/:id" element={<SongDetails />} />
          <Route path="/songs/new" element={<SongForm reloadSongs={loadSongs} reloadAlbums={loadAlbums} />} />
          <Route path="/songs/edit/:id" element={<SongForm reloadSongs={loadSongs} reloadAlbums={loadAlbums} />} />
          <Route path="/songs/delete/:id" element={<SongDelete reloadSongs={loadSongs} reloadAlbums={loadAlbums} setSuccessMessage={setSuccessMessage} />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
