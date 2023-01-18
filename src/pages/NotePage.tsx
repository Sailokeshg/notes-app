import React, { useEffect, useState } from "react";
// import notes from "../assets/data";
import { ReactComponent as ArrrowLeft } from "../assets/arrow-left.svg";
import { Link, useParams, useNavigate } from "react-router-dom";

const NotePage = () => {
  const [note, setNote] = useState<any>(null);
  let noteId: any = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, [noteId]);

  const getNote = async () => {
    let res = await fetch(`http://localhost:5000/notes/${noteId.id}`);
    let data = await res.json();
    setNote(data);
  };
  // let note = notes.find((note) => note.id === parseInt(noteId.id));

  const updateNote = async () => {
    await fetch(`http://localhost:5000/notes/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  const handleSubmit = () => {
    updateNote();
    navigate("/");
  };

  const deleteNote = async () => {
    await fetch(`http://localhost:5000/notes/${note.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    });
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
        <button onClick={deleteNote}>Delete</button>
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
