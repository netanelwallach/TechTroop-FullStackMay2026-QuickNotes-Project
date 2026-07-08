import NoteCard from "../NoteCard/NoteCard";
import styles from "./NotesGrid.module.css";

function NotesGrid({ Notes, onDeleteNote, onActiveNote, onUpdateNote }) {
  return (
    <div className={styles["grid-container"]}>
      {Notes.map((n) => (
        <NoteCard
          key={n.id}
          id={n.id}
          note={n.text}
          title={n.title}
          category={n.category}
          createDate={n.createDate}
          updateDate={n.updateDate}
          onDeleteNote={onDeleteNote}
          onActiveNote={onActiveNote}
        ></NoteCard>
      ))}
    </div>
  );
}

export default NotesGrid;
