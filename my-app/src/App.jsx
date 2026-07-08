import { useState } from "react";
import NewNote from "./components/NewNote/NewNote";
import NotesGrid from "./components/NotesGrid/NotesGrid";
import NoteModal from "./components/NoteModal/NoteModal";
import { categories } from "./constants/Categories";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("quick_notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [activeNote, setActiveNote] = useState(null);

  const handleAddNewNote = (newNoteTitle, newNoteText, newNoteCategory) => {
    const newNote = {
      id: Date.now(),
      title: newNoteTitle,
      text: newNoteText,
      createDate: new Date(),
      updateDate: null,
      category: newNoteCategory,
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("quick_notes", JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((n) => n.id !== noteId);

    setNotes(updatedNotes);
    localStorage.setItem("quick_notes", JSON.stringify(updatedNotes));
  };

  const handleActiveNote = (noteId) => {
    const selectNote = notes.find((n) => n.id === noteId);
    setActiveNote(selectNote);
  };

  const handleCloseNoteModal = () => {
    setActiveNote(null);
  };

  const handleUpdateNote = (
    noteId,
    updatedTitle,
    updatedText,
    updatedCategory,
  ) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          title: updatedTitle,
          text: updatedText,
          updateDate: new Date(),
          category: updatedCategory,
        };
      }
      return note;
    });

    setNotes(updatedNotes);
    localStorage.setItem("quick_notes", JSON.stringify(updatedNotes));
  };

  const handleUpdateActiveNote = (
    updatedTitle,
    updatedText,
    updatedCategory,
  ) => {
    handleUpdateNote(activeNote.id, updatedTitle, updatedText, updatedCategory);
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
          category={activeNote.category}
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
