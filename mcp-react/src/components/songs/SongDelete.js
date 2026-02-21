import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataSource from "../../data/dataSource";

const DeleteSong = ({ reloadSongs, setSuccessMessage }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const hasDeleted = useRef(false);

    useEffect(() => {
        if (hasDeleted.current) return; // Prevent multiple deletions if the component re-renders
        hasDeleted.current = true; // Mark as deleted to prevent future deletions on re-render

        const confirmAndDelete = async () => {
            const confirmed = window.confirm(
                `Are you sure you want to delete this song? This action cannot be undone.`
            );

            if (!confirmed) {
                navigate("/songs");
                return;
            }

            await dataSource.delete(`/songs/${id}`);
            await reloadSongs();
            setSuccessMessage("Song deleted successfully.");
            navigate("/songs");
        };

        confirmAndDelete();
    }, [id, navigate, reloadSongs, setSuccessMessage]);
    
    return null;
};

export default DeleteSong;