import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Note = ({ note, onDelete }) => {
  const dropNote = (e) => {
    e.target.style.left = `${e.pageX - 50}px`;
    e.target.style.top = `${e.pageY - 50}px`;
  };
  return (
    <div
      key={note.id}
      className="note"
      style={{ transform: `rotate(${note.rotate}deg)` }}
      draggable
      onDragEnd={dropNote}
    >
      <p className="text">{note.text}</p>
      <AiOutlineCloseCircle
        className="close"
        onClick={() => onDelete(note.id)}
      />
    </div>
  );
};

export default Note;
