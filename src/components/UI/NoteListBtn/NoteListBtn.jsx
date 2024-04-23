import listImg from '../../../assets/images/list.svg';
import gridImg from '../../../assets/images/grid.svg';
import './notelistbtn.scss';
const NoteListBtn = ({ setGridShow, grid }) => {
    return (
        <>
            <button className="btn" onClick={() => setGridShow(!grid)}>
                <img
                    src={!grid ? listImg : gridImg}
                    alt={!grid ? "listImg" : "gridImg"}
                />
                <span>{!grid ? 'Спискок' : 'Сетка'}</span>
            </button>
        </>
    );
}

export default NoteListBtn;
