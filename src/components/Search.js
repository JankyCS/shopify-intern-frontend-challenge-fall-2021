import React, {useState,useEffect} from 'react'
import SearchResultCard from './SearchResultCard'

const Search = (props) => {
    const {nominations,toggleNomination} = props
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [error, setError] = useState("")

    const noGlow = {
        boxShadow: "none"
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            searchMovies()
        }
    }

    const searchMovies = async () =>{
        if(query!=""){
            const r = await fetch('https://www.omdbapi.com/?s='+query+'&type=movie&apikey=270a44a7')
            const json = await r.json()

            if(json.Response === "True"){
                setSearchResults(json.Search)
                setError("")
            }
            else{
                setSearchResults([])
                setError(json.Error)
            }
        }
        else{
            setSearchResults([])
            setError("")
        }
    }

    useEffect(() => {
        searchMovies()
    }, [query]);

    return (
    <div style={{marginTop:10}}>
        <div className="input-group mb-3">
            <input className="form-control" style={noGlow} type="text" placeholder="Search" onKeyDown={handleKeyDown} onChange={e => setQuery(e.target.value)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" style={noGlow} type="button" onClick={searchMovies}>🔎</button>
            </div>
        </div>
        {
            !error ?
            searchResults.map(movie=><SearchResultCard key={movie.imdbID} toggle={toggleNomination} movie={movie} nominations={nominations}/>)
            :<div className="alert alert-danger" role="alert">
                Error: {error}
            </div>
        }
    </div>
    )
}

export default Search