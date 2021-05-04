const SearchResultCard = (props) => {
    const {nominations,toggle,movie} = props
    const nominated = nominations.some(e => e.imdbID === movie.imdbID)
    const completedNominations = nominations.length===5
    const {Title,Year} = movie

    const cardBodyStyle = {
        padding: "15px 10px",
    }

    const buttonStyle = {
        fontSize:"1.3rem",
        fontWeight:350,
        cursor: completedNominations && !nominated? null : "pointer",
        padding:"0px 5px 0px 15px",
        userSelect: "none",
        color: completedNominations && !nominated? "#D3D3D3" : "black",
        transition:"0.2s"
    }

    return (
    <div className="card" style={{marginBottom: "5px"}}>
        <div className="card-body" style={{display:"flex",padding: "15px 10px", alignItems: "center", justifyContent: "space-between"}}>
            <div>
                {Title ? Title+" ":""}
                <span style={{fontSize:"0.7rem"}}>{Year ? " ("+Year+")":""}</span>
            </div>
            <div style={buttonStyle} onClick={()=>toggle(movie)}>{nominated?"−":"+"}</div>
        </div>
    </div>
    )
}

export default SearchResultCard