import { useState } from "react";
import NewNote from "./components/NewNote/NewNote";
import NotesGrid from "./components/NotesGrid/NotesGrid";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNewNote = (newNoteTitle, newNoteText) => {
    const newNote = {
      id: Date.now(),
      title: newNoteTitle,
      text: newNoteText,
      date: new Date(),
    };

    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((n) => n.id !== noteId);

    setNotes(updatedNotes);
  };
  return (
    <>
      <NewNote onAddNote={handleAddNewNote} />
      <NotesGrid Notes={notes} deleteNote={handleDeleteNote} />
    </>
  );
}

export default App;
