import React, { useState } from "react";
import dataSource from "../../data/dataSource";
import AlbumCard from "./AlbumCard";

const AlbumList = ({ albumList }) => {
  // State to track which album's songs are currently expanded
  const [expandedAlbumId, setExpandedAlbumId] = useState(null);
  const [albumSongs, setAlbumSongs] = useState({});

  // Function to toggle the display of songs for a specific album
  const toggleSongs = async (albumId) => {
    if (expandedAlbumId === albumId) {
      setExpandedAlbumId(null);
      return;
    }

    setExpandedAlbumId(albumId);

    // If songs for this album haven't been loaded yet, fetch them
    if (!albumSongs[albumId]) {
      try {
        const response = await dataSource.get(
          `/songs/album/id/${albumId}`
        );

        // Update the state with the songs for this album
        setAlbumSongs((prev) => ({
          ...prev, // keep existing songs for other albums
          [albumId]: response.data // store songs for this album
        }));
      } catch (error) {
        console.error("Error loading songs:", error);
      }
    }
  };

  return (
    <div className="container page-content py-4">
      <h2 className="mb-4">Albums</h2>

      <div className="row g-3">
        {albumList.map((album) => (
          <AlbumCard
            key={album.album_id}
            album={album}
            toggleSongs={toggleSongs}
            isExpanded={expandedAlbumId === album.album_id}
            songs={albumSongs[album.album_id]}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
