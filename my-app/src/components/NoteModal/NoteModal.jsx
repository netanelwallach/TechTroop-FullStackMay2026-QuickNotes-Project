import Modal from "react-modal";
import modalStyles from "./NoteModal.module.css";
import cardStyles from "../NoteCard/NoteCard.module.css";
import NewNote from "../NewNote/NewNote";

Modal.setAppElement("#root");

function NoteModal({
  note,
  title,
  /*createDate,*/ isOpen,
  onClose,
  onUpdateNote,
}) {
  // formatDate();

  // const handleDeleteNote = () => {
  //   event.stopPropagation();
  //   if (confirm("Are you sure you want to delete your note?")) {
  //     deleteNote(id);
  //   }
  // };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={cardStyles["note-card"]}
      overlayClassName={modalStyles["modal-overlay"]}
    >
      <NewNote
        initialTitle={title}
        initialText={note}
        onSubmit={onUpdateNote}
      />
    </Modal>
  );

  function formatDate() {
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

    const dateObj = new Date(createDate);

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
  }
}

export default NoteModal;
