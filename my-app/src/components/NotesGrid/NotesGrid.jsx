import NoteCard from "../NoteCard/NoteCard";
import styles from "./NotesGrid.module.css";

function NotesGrid({ Notes, deleteNote }) {
  return (
    <div className={styles["grid-container"]}>
      {Notes.map((n) => (
        <NoteCard
          key={n.id}
          note={n.text}
          id={n.id}
          date={n.date}
          deleteNote={deleteNote}
        ></NoteCard>
      ))}
    </div>
  );
}

export default NotesGrid;
