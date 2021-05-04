import React, {useState} from 'react'
// import SearchResults from './SearchResults'

const SearchResultCard = (props) => {
    const {Title,Year} = props.movie

    return (
    <div>
        {Title ? Title:""}
        {Year ? Year:""}
    </div>
    )
}

export default SearchResultCard