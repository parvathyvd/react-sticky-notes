import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import Notes from "./Notes";
const initialState = {
  notes: [],
  created: null,
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        created: new Date().toTimeString().slice(0, 8),
        notes: [
          ...state.notes,
          {
            id: uuid(),
            text: action.payload,
            rotate: Math.floor(Math.random() * 20),
          },
        ],
      };
    }
    case "REMOVE": {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

const StickyNotes = () => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(notesReducer, initialState);
  const onDelete = (id) => {
    console.log("del", id);
    dispatch({ type: "REMOVE", payload: id });
  };
  const onAdd = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };
  return (
    <main className="sticky-notes">
      <h1>Sticky Notes {`(${state.notes.length})`}</h1>
      {state.created !== null && (
        <span className="created">
          Last Note Created at {`${state.created}`}
        </span>
      )}
      <form className="form-control" onSubmit={onAdd}>
        <textarea
          id="sticky"
          name="sticy"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit" className="btn btn-add">
          Add
        </button>
      </form>
      {state.notes.length > 0 && (
        <Notes notes={state.notes} onDelete={onDelete} />
      )}
    </main>
  );
};

export default StickyNotes;
