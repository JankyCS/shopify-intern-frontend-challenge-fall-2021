import React, {useState} from 'react'
// import SearchResults from './SearchResults'

const Search = (props) => {
    const [query, setQuery] = useState('')

    return (
    <div>
        <input className="form-control" type="text" placeholder="Search" onChange={e => setQuery(e.target.value)}/>
        <button type="button" className="btn btn-primary" onClick={()=>props.addNomination(query)}>Primary</button>
    </div>
    )
}

export default Search