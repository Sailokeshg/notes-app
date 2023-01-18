import React, { useEffect, useState } from "react";
import { ReactComponent as ArrrowLeft } from "../assets/arrow-left.svg";
import { Link, useParams, useNavigate } from "react-router-dom";

const NotePage = () => {
  const [note, setNote] = useState<any>(null);
  let noteId: any = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, [noteId.id]);

  const getNote = async () => {
    if (noteId === "new") return;
    let res = await fetch(`http://localhost:5000/notes/${noteId.id}`);
    let data = await res.json();
    setNote(data);
  };

  const createNote = async () => {
    await fetch(`http://localhost:5000/notes/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  const updateNote = async () => {
    await fetch(`http://localhost:5000/notes/${noteId.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  const deleteNote = async () => {
    await fetch(`http://localhost:5000/notes/${noteId.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  };

  const handleSubmit = () => {
    if (noteId.id !== "new" && !note.body) {
      deleteNote();
    } else if (noteId.id !== "new") {
      updateNote();
    } else if (noteId.id === "new" && note.body!= null) {
      createNote();
    }
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {noteId.id !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        value={note?.body}
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
      />
    </div>
  );
};

export default NotePage;
