import React from 'react'
import './SearchBox.style.css'
export const SearchBox = ({placeholder,HandleChange}) => {
    return (
        <div className="search">
             <input type="search" placeholder={placeholder} onChange={HandleChange}></input>
           
        </div>
    )
}
