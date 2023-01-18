import React from "react";
import notes from "../assets/data";
import { ReactComponent as ArrrowLeft } from "../assets/arrow-left.svg";
import { Link, useParams } from "react-router-dom";

const NotePage = () => {
  let noteId: any = useParams();

  let note = notes.find((note) => note.id === parseInt(noteId.id));

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
