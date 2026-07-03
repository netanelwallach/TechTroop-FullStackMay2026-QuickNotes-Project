import { useState } from "react";

function NewNote({ onAddNote }) {
  const rows = 15;
  const columns = 50;
  const [note, setNote] = useState("");

  const updateNoteText = (event) => {
    setNote(event.target.value);
  };

  const addClickHandle = (event) => {
    event.preventDefault();
    if (note.trim() === "") return;
    onAddNote(note);
    setNote("");
  };

  return (
    <form>
      <textarea
        name="new-note"
        id="new-note"
        placeholder="Your note..."
        rows={rows}
        cols={columns}
        value={note}
        onChange={updateNoteText}
      ></textarea>
      <div>
        <button onClick={addClickHandle}>Add</button>
      </div>
    </form>
  );
}

export default NewNote;
