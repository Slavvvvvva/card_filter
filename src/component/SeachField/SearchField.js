import React from 'react'
import './search-box.styles.css'

const SearchField = ({Filter, placeholder }) => {
    return (
        <input className ='search' type = 'search' placeholder={placeholder} onChange={Filter}/>
    )
}

export default SearchField