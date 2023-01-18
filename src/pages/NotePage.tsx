import React, { useEffect, useState } from "react";
// import notes from "../assets/data";
import { ReactComponent as ArrrowLeft } from "../assets/arrow-left.svg";
import { Link, useParams } from "react-router-dom";

const NotePage = () => {
  const [note, setNote] = useState<any>(null);
  let noteId: any = useParams();

  useEffect(() => {
    getNote();
  }, [noteId]);

  const getNote = async () => {
    let res = await fetch(`http://localhost:5000/notes/${noteId.id}`);
    let data = await res.json();
    setNote(data);
  };
  // let note = notes.find((note) => note.id === parseInt(noteId.id));

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrrowLeft />
          </Link>
        </h3>
      </div>
      <textarea value={note?.body} />
    </div>
  );
};

export default NotePage;
