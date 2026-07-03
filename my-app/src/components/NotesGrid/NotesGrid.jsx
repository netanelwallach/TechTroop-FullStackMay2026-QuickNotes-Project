import NoteCard from "../NoteCard/NoteCard";
import styles from "./NotesGrid.module.css";

function NotesGrid({ Notes }) {
  return (
    <div className={styles["grid-container"]}>
      {Notes.map((n) => (
        <NoteCard key={n.id} note={n.text} date={n.date}></NoteCard>
      ))}
    </div>
  );
}

export default NotesGrid;
