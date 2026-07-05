import NoteCard from "../NoteCard/NoteCard";
import styles from "./NotesGrid.module.css";

function NotesGrid({ Notes, deleteNote }) {
  return (
    <div className={styles["grid-container"]}>
      {Notes.map((n) => (
        <NoteCard
          key={n.id}
          id={n.id}
          note={n.text}
          title={n.title}
          date={n.date}
          deleteNote={deleteNote}
        ></NoteCard>
      ))}
    </div>
  );
}

export default NotesGrid;
