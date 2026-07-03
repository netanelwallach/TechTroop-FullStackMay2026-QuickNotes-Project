import { useState } from "react";
import NewNote from "./components/NewNote/NewNote";
import NotesGrid from "./components/NotesGrid/NotesGrid";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNewNote = (newNoteText) => {
    const newNote = {
      id: Date.now(),
      text: newNoteText,
      date: new Date(),
    };

    setNotes([...notes, newNote]);
  };
  return (
    <>
      <NewNote onAddNote={handleAddNewNote} />
      <NotesGrid Notes={notes} />
    </>
  );
}

export default App;
