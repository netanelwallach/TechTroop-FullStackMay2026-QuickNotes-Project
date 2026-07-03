import { useState } from "react";

function NewNote({ Notes }) {
  const rows = 15;
  const columns = 50;

  const addClickHandle = () => {
    Notes.push();
  };
  return (
    <form>
      <textarea
        name="new-note"
        id="new-note"
        placeholder="Your note..."
        rows={rows}
        cols={columns}
      ></textarea>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default NewNote;
