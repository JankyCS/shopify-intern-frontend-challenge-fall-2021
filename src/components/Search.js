import React, {useState} from 'react'
import SearchResultCard from './SearchResultCard'

const Search = (props) => {
    const {nominations,toggleNomination} = props
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const noGlow = {
        boxShadow: "none"
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            searchMovies()
        }
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
    <div style={{marginTop:10}}>
        <div className="input-group mb-3">
            <input className="form-control" style={noGlow} type="text" placeholder="Search" onKeyDown={handleKeyDown} onChange={e => setQuery(e.target.value)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" style={noGlow} type="button" onClick={searchMovies}>🔎</button>
            </div>
        </div>
        {
            searchResults.map(movie=><SearchResultCard key={movie.imdbID} toggle={toggleNomination} movie={movie} nominated={nominations.some(e => e.imdbID === movie.imdbID)}/>)
        }
    </div>
    )
}

export default Search