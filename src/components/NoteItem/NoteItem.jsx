import './noteitem.scss';
import deleteImg from '../../assets/images/delete.svg'
import editImg from '../../assets/images/edit.svg'
const NoteItem = ({ note, grid, openEditModal, setItem, removeItem }) => {
    return (
        <div className="item">
            <div className={grid ? "item__header group-list" : "item__header"}>
                <h3>{note.title} {note.id}</h3>
                <span>{note.date}</span>
            </div>
            <p>
                {note.body}
            </p>
            <div className="item__btns">
                <button className='item__btns-edit' onClick={() => {
                    openEditModal(true);
                    setItem(note);
                }} >
                    <img src={editImg} alt="Edit" />
                    РЕДАКТИРОВАТЬ
                </button>
                <button className='item__btns-delete' onClick={() => removeItem(note)}>
                    <img src={deleteImg} alt="Delete" />
                    Удалить
                </button>
            </div>
        </div>
    );
}

export default NoteItem;
