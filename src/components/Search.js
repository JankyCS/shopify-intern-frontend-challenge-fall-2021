import React, {useState} from 'react'
import SearchResultCard from './SearchResultCard'

const Search = (props) => {
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const noGlow = {
        boxShadow: "none"
    }

    const searchMovies = async () =>{
        console.log('http://www.omdbapi.com/?s='+query+'&type=movie&apikey='+process.env.REACT_APP_API_KEY)
        const r = await fetch('http://www.omdbapi.com/?s='+query+'&type=movie&apikey='+process.env.REACT_APP_API_KEY)
        const json = await r.json()

        console.log(json)
        if(json.Response === "True"){
            setSearchResults(json.Search)
        }
        else{
            setSearchResults([])
        }
    }

    return (
    <div>
        <div className="input-group mb-3">
            <input className="form-control" style={noGlow} type="text" placeholder="Search" onChange={e => setQuery(e.target.value)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" style={noGlow} type="button" onClick={searchMovies}>🔎</button>
            </div>
        </div>
        {process.env.REACT_APP_API_KEY}
        {/* {searchResults.toString()} */}
        {
            searchResults.map(movie=><SearchResultCard key={movie.imdbID} toggle={props.toggleNomination} movie={movie} nominated={props.nominations.includes(movie)}/>)
        }
        {/* <button type="button" className="btn btn-primary" onClick={()=>props.addNomination(query)}>Primary</button> */}
    </div>
    )
}

export default Search