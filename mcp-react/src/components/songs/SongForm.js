import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataSource from "../../data/dataSource";
import SongFormFields from "./SongFormFields";

const SongForm = ({ reloadSongs, reloadAlbums }) => {
  const { id } = useParams(); // undefined if creating
  const navigate = useNavigate();

  const isEditing = Boolean(id);

  const [song, setSong] = useState({
    song_title: "",
    lyrics: "",
    genre: "",
    streaming_url: "",
    artist: "",
    album_title: "",
    release_year: "",
    artwork_url: "",
    video_url: "",
    notes: "",
    theme_id: null
  });

  // Load existing song if editing
  useEffect(() => {
    if (isEditing) {
      const loadSong = async () => {
        const response = await dataSource.get(`/songs/${id}`);
        setSong(response.data[0]); // API returns array
      };
      loadSong();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      await dataSource.put(`/songs/${id}`, song);
      
      await reloadSongs(); // Refresh song list in parent component
      await reloadAlbums(); // Refresh album list in parent component (in case album title changed)

      navigate(`/songs/${id}`);

    } else {
      const response = await dataSource.post("/songs", song);
      
      console.log("Created song:", response.data);              // Log the created song data
      console.log("New song ID:", response.data.song_id);       // Log the new song ID
      
      const newSongId = response.data.song_id;                  // Get the ID of the newly created song
      
      await reloadSongs();                                      // Refresh song list in parent component
      await reloadAlbums();                                     // Refresh album list in parent component (in case album title changed)
      
      navigate(`/songs/${newSongId}`);                          // Navigate to the new song's details page
      
      return;                                                   // Exit early to avoid navigating again at the end of the function
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    if (isEditing) {
      navigate(`/songs/${id}`);
    } else {
      navigate("/songs");
    }
    
  };

  return (
    <SongFormFields
      song={song}
      isEditing={isEditing}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default SongForm;