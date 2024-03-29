import React from "react";
import { Link } from "react-router-dom";

const getTitle = (note: any) => {
  const title = note.body.split("\n")[0];
  if (title.length > 40) {
    return title.slice(0, 40);
  }
  return title;
};

const getTime = (note: any) => {
  return new Date(note.updated).toLocaleDateString();
};

const getContent = (note: any) => {
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", " ");
  content = content.replaceAll(title, "");

  if (content.length > 40) {
    return content.slice(0, 40) + "...";
  } else {
    return content;
  }
};
const ListItem = ({ note }: any) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getTime(note)}</span>{getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
