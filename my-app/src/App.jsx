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
      createDate: new Date(),
      updateDate: null,
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

  const handleUpdateNote = (noteId, updatedTitle, updatedText) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          title: updatedTitle,
          text: updatedText,
          updateDate: new Date(),
        };
      }
      return note;
    });

    setNotes(updatedNotes);
  };

  const handleUpdateActiveNote = (updatedTitle, updatedText) => {
    handleUpdateNote(activeNote.id, updatedTitle, updatedText);
    handleCloseNoteModal();
  };

  return (
    <>
      <NewNote onSubmit={handleAddNewNote} />
      <NotesGrid
        Notes={notes}
        onDeleteNote={handleDeleteNote}
        onActiveNote={handleActiveNote}
      />
      {activeNote ? (
        <NoteModal
          // id={activeNote.id}
          title={activeNote.title}
          note={activeNote.text}
          // createDate={activeNote.createDate}
          // updateDate={activeNote.updateDate}
          isOpen={activeNote !== null}
          onClose={handleCloseNoteModal}
          onUpdateNote={handleUpdateActiveNote}
        />
      ) : null}
    </>
  );
}

export default App;
