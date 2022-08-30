import { useState, useEffect } from "react";
import { FormInput, Header, SectionNotes } from "./components";
import Profile from "./components/profile";
import style from "./styles/app.module.css";
import { getInitialData } from "./utils";

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <>
      <Header search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main className={style.main}>
        <div className={style.notes}>
        <Profile/>
        <FormInput updateNotes={setNotes} />
        </div>
        <div className={style.notes}>
        <SectionNotes label='Active Notes' notes={activeNotes} setNotes={setNotes} />
        <SectionNotes label='Archived Notes' notes={archivedNotes} setNotes={setNotes} />
        </div>
      </main>
    </>
  );
}

export default App;
