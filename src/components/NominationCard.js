import React, {useState} from 'react'
// import SearchResults from './SearchResults'

const NominationCard = (props) => {
    const {toggle,movie} = props
    const {Poster} = movie

    const imgStyle = {
        width: "100%",
        height: "100%",
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
        paddingBottom:"0.2rem"
    }

    return (
    <div className="card"  style={{margin:"10px"}}>
        <img className="card-img-top" src={Poster} alt="Card image cap" style={imgStyle}/>
        <button className="rounded-circle btn btn-dark" style={btnStyle} onClick={()=>toggle(movie)}>x</button>
    </div>
    )
}

export default NominationCard