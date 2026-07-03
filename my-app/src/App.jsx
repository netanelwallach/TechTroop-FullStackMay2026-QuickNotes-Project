import NewNote from "./components/NewNote/NewNote";
import NotesGrid from "./components/NotesGrid/NotesGrid";

function App() {
  const notes = [
    { id: 1, text: "לקנות חלב", date: "03/07/2026" },
    { id: 2, text: "ללמוד React", date: "03/07/2026" },
  ];
  return (
    <>
      <NewNote Notes={notes} />
      <NotesGrid Notes={notes} />
    </>
  );
}

export default App;
