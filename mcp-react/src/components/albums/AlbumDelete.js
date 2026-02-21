import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataSource from "../../data/dataSource";

const DeleteAlbum = ({ reloadAlbums, setSuccessMessage }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hasDeleted = useRef(false);

  useEffect(() => {
    if (hasDeleted.current) return; // Prevent multiple deletions if the component re-renders
    hasDeleted.current = true; // Mark as deleted to prevent future deletions on re-render

    const confirmAndDelete = async () => {
      const confirmed = window.confirm(
        "Are you sure you want to delete this album? This action cannot be undone."
      );

      if (!confirmed) {
        navigate("/albums");
        return;
      }

      await dataSource.delete(`/albums/${id}`);
      await reloadAlbums(); //
      setSuccessMessage("Album deleted successfully.");
      navigate("/albums");
    };

    confirmAndDelete();
  }, [id, navigate, reloadAlbums, setSuccessMessage]);
  
  return null;
};

export default DeleteAlbum;