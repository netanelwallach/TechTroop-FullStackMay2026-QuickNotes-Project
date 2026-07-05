import { useState, useRef, useLayoutEffect } from "react";
import styles from "./NewNote.module.css";

function NewNote({ onAddNote }) {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");

  const updateNoteText = (event) => {
    setNote(event.target.value);
  };

  const updateNoteTitle = (event) => {
    setTitle(event.target.value);
  };

  const addClickHandle = (event) => {
    event.preventDefault();
    if (note.trim() === "") return;
    onAddNote(title, note);
    setNote("");
    setTitle("");
  };

  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [note]);

  return (
    <form className={styles["new-note-form"]}>
      <input
        type="text"
        name="new-note-title"
        id="new-note-title"
        placeholder="Title"
        value={title}
        onChange={updateNoteTitle}
        className={styles["note-input"]}
      />

      <textarea
        name="new-note"
        id="new-note"
        placeholder="Your note..."
        rows={3}
        ref={textareaRef}
        value={note}
        onChange={updateNoteText}
        className={styles["textarea-auto"]}
      ></textarea>

      <button onClick={addClickHandle} className={styles["add-btn"]}>
        Add
      </button>
    </form>
  );
}

export default NewNote;
