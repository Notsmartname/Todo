import { useState } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import NoteListBtn from '../UI/NoteListBtn/NoteListBtn';
import './notelist.scss';

const NoteList = ({ notes, openEditModal, setItem, removeItem }) => {
    const [gridShow, setGridShow] = useState(false);

    return (
        <>
            <div className="note__list container">
                <div className="note__list-header">
                    <h2 className="note__list-header-title">
                        {notes.length > 0 ? "Все заметки" : "Нет заметок"}
                    </h2>
                    <NoteListBtn
                        grid={gridShow}
                        setGridShow={setGridShow}
                    />
                </div>
                <div className={gridShow ? "note__list list" : "note__list grid"}>
                    {
                        notes.map(
                            note =>
                                <NoteItem
                                    key={note.id}
                                    note={note}
                                    grid={gridShow}
                                    openEditModal={openEditModal}
                                    setItem={setItem}
                                    removeItem={removeItem}
                                />)
                    }

                </div>
            </div>
        </>
    );
}

export default NoteList;
