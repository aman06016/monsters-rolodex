import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder,eventHandler}) => {
    return(
        <div className="search">
            <input type="search" size="80" placeholder={placeholder} onChange={ eventHandler }/>
        </div>
    );
    

}

export default SearchBox;