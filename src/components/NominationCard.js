import React, {useState} from 'react'
// import SearchResults from './SearchResults'

const NominationCard = (props) => {
    const {toggle,movie} = props
    const {Poster} = movie

    const imgStyle = {
        width: "100%",
        height: "100%",
        minHeight:"13.5rem",
        objectFit: "cover",
        zIndex:0
    }

    const btnStyle = {
        width:"1.5rem",
        height:"1.5rem",
        position:"absolute",
        zIndex: 2,
        top:"-0.5rem",
        right: "-0.5rem",
        lineHeight:"1.2rem",
        padding:0,
        paddingBottom:"0.1rem"
    }
    
    return (
    <div className="card"  style={{margin:"10px"}}>
        <img className="card-img-top" src={Poster} alt={movie.Title} style={imgStyle}/>
        <button className="rounded-circle btn btn-dark" style={btnStyle} onClick={()=>toggle(movie)}>✖</button>
    </div>
    )
}

export default NominationCard