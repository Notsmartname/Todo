import { useMemo, useState } from "react"
import NoteModal from "./components/Modal/NoteModal"
import NavBar from "./components/NavBar/NavBar"
import NoteList from "./components/NoteList/NoteList"
import AddNoteBtn from "./components/UI/AddNoteBtn/AddNoteBtn"

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Title', date: '12.12.12', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea eius expedita repellat explicabo eum libero quia?' },
    { id: 2, title: 'Title', date: '12.12.12', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea eius expedita repellat explicabo eum libero quia?' },
    { id: 3, title: 'Titleasda', date: '12.12.12', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea eius expedita repellat explicabo eum libero quia?' },
  ])
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [itemNote, setItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const openEditModal = (status) => {
    setEdit(true);
    setShowModal(status);
  }

  const openAddModal = (status) => {
    setEdit(false);
    setShowModal(status);
  }
  const removeItem = (itemNote) => {
    setNotes(
      notes.filter(e => e.id !== itemNote.id)
    );
  }


  const sortedAndSearchedNotes = useMemo(() => {
    return notes.filter(note => note.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, notes]);


  return (
    <>
      <header>
        <NavBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </header>
      <main>
        <NoteList notes={sortedAndSearchedNotes} openEditModal={openEditModal} setItem={setItem} removeItem={removeItem} />
      </main>
      {!showModal && <AddNoteBtn openAddModal={openAddModal} />}
      {
        showModal
        &&
        <NoteModal
          notes={notes}
          setShowModal={setShowModal}
          setNotes={setNotes}
          edit={edit}
          itemNote={itemNote}
          setItem={setItem}
        />
      }
    </>
  )
}

export default App
