import React, { useState, useEffect } from "react";
// import notes from "../assets/data";

import ListItem from "../components/ListItem";

const NotesPage = () => {
  const [notes, setNotes] = useState<any>([]);
  useEffect(() => {
    fetchNotes();
  }, []);

  let fetchNotes = async () => {
    let res = await fetch("http://localhost:5000/notes");
    let data = await res.json();
    setNotes(data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782;Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {" "}
        {notes.map((note:any) => (
          <ListItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
