import React from "react";
import notes from "../assets/data";
import { useParams } from "react-router-dom";

const NotePage = () => {
  let noteId: any = useParams();

  let note = notes.find((note) => note.id === parseInt(noteId.id));

  return <div>{note?.body}</div>;
};

export default NotePage;
