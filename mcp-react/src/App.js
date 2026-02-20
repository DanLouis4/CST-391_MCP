import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import dataSource from "./data/dataSource";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AlbumList from "./components/albums/AlbumList";
import SongList from "./components/songs/SongList";
import SongDetails from "./components/songs/SongDetails";
import SongForm from "./components/songs/SongForm";
import SearchPage from "./components/search/SearchPage";

const App = () => {
  const [albumList, setAlbumList] = useState([]);
  const [songList, setSongList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [currentlySelectedSongIndex, setCurrentlySelectedSongIndex] = useState(0);

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
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<AlbumList albumList={albumList} />} />
          <Route path="/songs" element={<SongList songList={songList} />} />
          <Route path="/songs/new" element={<SongForm />} />
          <Route path="/songs/edit/:id" element={<SongForm />} />
          <Route path="/songs/:id" element={<SongDetails />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
    </Router>
  );
};

export default App;
