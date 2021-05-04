import React, {useState} from 'react'
// import SearchResults from './SearchResults'

const Search = (props) => {
    const [query, setQuery] = useState('')
    const noGlow = {
        boxShadow: "none"
    }

    return (
    <div>
        <div className="input-group mb-3">
            <input className="form-control" style={noGlow} type="text" placeholder="Search" onChange={e => setQuery(e.target.value)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" style={noGlow} type="button">🔎</button>
            </div>
        </div>
        {/* <button type="button" className="btn btn-primary" onClick={()=>props.addNomination(query)}>Primary</button> */}
    </div>
    )
}

export default Search