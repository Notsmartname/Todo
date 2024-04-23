import addImg from '../../../assets/images/edit.svg';
import './addnotebtn.scss';
const AddNoteBtn = ({ openAddModal }) => {
    return (
        <button onClick={() => openAddModal(true)} className="btn add-btn">
            <img src={addImg} alt="addImg" />
        </button>
    );
}

export default AddNoteBtn;
