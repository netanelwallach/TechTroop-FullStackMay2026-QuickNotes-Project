import { useState, useRef, useLayoutEffect } from "react";
import styles from "./NewNote.module.css";
import { categories } from "../../constants/Categories";

function NewNote({ onSubmit, initialTitle, initialText, initialCategory }) {
  const [note, setNote] = useState(initialText || "");
  const [title, setTitle] = useState(initialTitle || "");
  const [category, setCategory] = useState(
    initialCategory || categories.personal,
  );

  const updateNoteText = (event) => {
    setNote(event.target.value);
  };

  const updateNoteTitle = (event) => {
    setTitle(event.target.value);
  };

  const submitClickHandle = (event) => {
    event.preventDefault();
    if (note.trim() === "") return;

    if (onSubmit) {
      onSubmit(title, note, category);
    }

    if (initialText === null || initialText === undefined) {
      setNote("");
      setTitle("");
    }
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

      <div className={styles["category-container"]}>
        <select
          id="note-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles["category-select"]}
        >
          {Object.keys(categories).map((key) => (
            <option key={key} value={categories[key]}>
              {key.charAt(0).toUpperCase() + key.slice(1)} Note
            </option>
          ))}
        </select>
      </div>

      <button onClick={submitClickHandle} className={styles["add-btn"]}>
        {/* {initialText !== null && initialText !== undefined ? "Update" : "Add"} */}
        {initialText ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default NewNote;
