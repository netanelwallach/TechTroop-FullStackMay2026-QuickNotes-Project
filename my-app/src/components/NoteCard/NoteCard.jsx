import styles from "./NoteCard.module.css";

function NoteCard({ note, date }) {
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

  return (
    <div className={styles["note-card"]}>
      <span className={styles["note-date"]}>{formattedDate}</span>
      <p>{note}</p>
    </div>
  );
}

export default NoteCard;
