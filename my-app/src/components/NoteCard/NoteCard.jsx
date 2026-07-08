import styles from "./NoteCard.module.css";
// import NoteModal from "../NoteModal/NoteModal";
// import { categories } from "../../constants/Categories";

function NoteCard({
  id,
  note,
  title,
  createDate,
  updateDate,
  category,
  onDeleteNote,
  onActiveNote,
  onUpdateNote,
}) {
  const formattedCreateDate = formatDate(createDate);
  const formattedUpdateDate =
    updateDate !== null ? formatDate(updateDate) : null;

  const handleDeleteNote = (event) => {
    event.stopPropagation();
    if (confirm("Are you sure you want to delete your note?")) {
      onDeleteNote(id);
    }
  };

  const handleActiveNote = () => {
    onActiveNote(id);
  };

  return (
    <div
      style={{ backgroundColor: category }}
      className={styles["note-card"]}
      onClick={handleActiveNote}
    >
      <button
        type="button"
        className={styles["delete-btn"]}
        aria-label="Delete note"
        onClick={handleDeleteNote}
      >
        &times;
      </button>
      <h3>{title}</h3>
      <p>{note}</p>
      <div className={styles["note-footer"]}>
        <span className={styles["note-date"]}>
          created: {formattedCreateDate}
        </span>
        {formattedUpdateDate !== null ? (
          <span className={styles["note-date"]}>
            updated: {formattedUpdateDate}
          </span>
        ) : null}
      </div>
    </div>
  );

  function formatDate(date) {
    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const dateObj = new Date(date);

    // 1. מחלצים את שם החודש (למשל "Aug") ואת השעה/דקות (למשל "12:30 PM")
    const month = dateObj.toLocaleDateString("en-US", { month: "short" });
    const time = dateObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    // 2. מחלצים את המספר של היום בחודש (למשל 31)
    const dayNum = dateObj.getDate();

    // 3. מקבלים את הסיומת המתאימה (למשל "st")
    const suffix = getOrdinalSuffix(dayNum);

    // 4. מחברים הכל למחרוזת אחת יפה
    const formattedDate = `${month} ${dayNum}${suffix} ${time}`;
    return formattedDate;
  }
}

export default NoteCard;
