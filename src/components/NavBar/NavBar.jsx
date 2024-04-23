import './navbar.scss';
import searchImg from '../../assets/images/search.svg';
import backImg from '../../assets/images/back.svg';
import closeImg from '../../assets/images/trailing.svg';
import { useState } from 'react';

const NavBar = ({ setSearchQuery, searchQuery }) => {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const showSearch = () => {
        setShowSearchBar(!showSearchBar)
    }
    return (
        <>
            <div className="nav">
                {!showSearchBar && <div className="nav__content">
                    <button className="nav__content-lang-btn">
                        <span>RU</span>
                    </button>
                    <h1 className="nav__content-title">
                        Заметки
                    </h1>
                    <button onClick={showSearch} className="nav__content-search-btn">
                        <img src={searchImg} alt="Search" />
                    </button>
                </div>}

                {showSearchBar && <div className="nav__search">
                    <button onClick={showSearch}>
                        <img src={backImg} alt="Back" />
                    </button>
                    <input
                        type='text'
                        placeholder='Поиск...'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <button onClick={() => setSearchQuery('')}>
                        <img src={closeImg} alt="Close" />
                    </button>
                </div>}
            </div>
        </>
    );
}

export default NavBar;
