import { useState } from "react";
import NewNote from "./components/NewNote/NewNote";
import NotesGrid from "./components/NotesGrid/NotesGrid";
import NoteModal from "./components/NoteModal/NoteModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

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

  const handleActiveNote = (noteId) => {
    const selectNote = notes.find((n) => n.id === noteId);
    setActiveNote(selectNote);
  };

  const handleCloseNoteModal = () => {
    setActiveNote(null);
  };

  return (
    <>
      <NewNote onAddNote={handleAddNewNote} />
      <NotesGrid
        Notes={notes}
        onDeleteNote={handleDeleteNote}
        onActiveNote={handleActiveNote}
      />
      {activeNote ? (
        <NoteModal
          isOpen={activeNote !== null}
          title={activeNote.title}
          note={activeNote.text}
          date={activeNote.date}
          onClose={handleCloseNoteModal}
        />
      ) : null}
    </>
  );
}

export default App;
