import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import './notemodal.scss';
const NoteModal = ({ setShowModal, setNotes, notes, edit, itemNote, setItem }) => {
    const [note, setNote] = useState(!itemNote ? {
        title: '',
        body: '',
    } : itemNote)


    const addItem = () => {
        setNotes([...notes, { ...note, id: uuidv4(), date: Date.now() }]);

        setNote({ title: '', body: '' });
        setShowModal(false);
    }

    const changeItem = () => {
        console.log(note);
        const nextNotes = notes.map(item => {
            if (item.id === note.id) {
                return { ...note, title: note.title, body: note.body, date: Date.now() };
            } else {
                return item;
            }
        })
        setNotes(nextNotes);

        setShowModal(false);
        setItem(null);
        setNote({ title: '', body: '' });
    }

    return (
        <div className='modal'>
            <div className="modal__card">
                <h3>{!edit ? "Добавить заметку" : "Изменить заметку"}</h3>
                <div className="modal__card-row">
                    <label htmlFor="title" className="modal__card-row-label">Title</label>
                    <input
                        value={note.title}
                        onChange={(e) => setNote({ ...note, title: e.target.value })}
                        placeholder='Title'
                        id='title'
                        type="text"
                        className="modal__card-row-input"
                    />
                </div>
                <div className="modal__card-row">
                    <label htmlFor="body" className="modal__card-row-label">Content</label>
                    <input
                        value={note.body}
                        onChange={(e) => setNote({ ...note, body: e.target.value })}
                        placeholder='Content'
                        id='body'
                        type="text"
                        className="modal__card-row-input"
                    />
                </div>
                <div className="modal__card-btns">
                    <button onClick={() => { setShowModal(false); setItem(null); }} className="modal__card-btns-cencel">Отмена</button>
                    <button className="modal__card-btns-add" onClick={edit ? changeItem : addItem}>{!edit ? 'Добавить' : "Изменить"}</button>
                </div>
            </div>
        </div>
    );
}

export default NoteModal;
