const SearchResultCard = (props) => {
    const {nominated,toggle,movie} = props
    const {Title,Year} = movie

    const cardBodyStyle = {
        padding: "15px 10px",
    }

    return (
    <div className="card" style={{marginBottom: "5px"}}>
        <div className="card-body" style={{display:"flex",padding: "15px 10px", alignItems: "center", justifyContent: "space-between"}}>
            <div>
                {Title ? Title+" ":""}
                <span style={{fontSize:"0.7rem"}}>{Year ? " ("+Year+")":""}</span>
            </div>
            <div style={{fontSize:"1.3rem",fontWeight:350,cursor:"pointer",padding:"0px 5px 0px 15px",  userSelect: "none"}} onClick={()=>toggle(movie)}>{nominated?"−":"+"}</div>
        </div>
    </div>
    )
}

export default SearchResultCard