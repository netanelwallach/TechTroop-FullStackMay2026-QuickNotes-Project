import { useState, useRef, useLayoutEffect } from "react";
import styles from "./NewNote.module.css";

function NewNote({ onAddNote }) {
  // const rows = 15;
  // const columns = 50;
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
    <form>
      <div className={styles["note-container"]}>
        <input
          type="text"
          name="new-note-title"
          id="new-note-title"
          placeholder="Title"
          value={title}
          onChange={updateNoteTitle}
        />
        <textarea
          name="new-note"
          id="new-note"
          placeholder="Your note..."
          rows={3}
          // cols={columns}
          ref={textareaRef}
          value={note}
          onChange={updateNoteText}
          className={styles["textarea-auto"]}
        ></textarea>
      </div>
      <div>
        <button onClick={addClickHandle}>Add</button>
      </div>
    </form>
  );
}

export default NewNote;
