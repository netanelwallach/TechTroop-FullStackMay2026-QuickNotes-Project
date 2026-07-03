import styles from "./NoteCard.module.css";

function NoteCard({ note, date }) {
  return <div className={styles["note-card"]}>{note}</div>;
}

export default NoteCard;
