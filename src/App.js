import "./App.css";
import StickyNotes from "./components/StickyNotes";

function App() {
  const dragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <>
      <div className="App" onDragOver={dragOver}>
        <StickyNotes />
      </div>
    </>
  );
}

export default App;
