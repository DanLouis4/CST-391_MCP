import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataSource from "../../data/dataSource";
import AlbumFormFields from "./AlbumFormFields";

const AlbumForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [album, setAlbum] = useState({
    artist: "",
    title: "",
    release_year: "",
    artwork_url: ""
  });

  useEffect(() => {
    const loadAlbum = async () => {
      const response = await dataSource.get(`/albums/${id}`);
      setAlbum(response.data[0]);
    };

    if (id) {
      loadAlbum();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbum((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dataSource.put(`/albums/${id}`, album);

    navigate("/albums");
  };

  const handleCancel = () => {
    navigate("/albums");
  };

  return (
    <AlbumFormFields
      album={album}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default AlbumForm;