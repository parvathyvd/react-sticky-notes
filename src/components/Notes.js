import React from "react";
import Note from "./Note";

const Notes = ({ notes, onDelete }) => {
  return (
    <div className="notes">
      {notes.map((note) => {
        return <Note note={note} key={note.id} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default Notes;
