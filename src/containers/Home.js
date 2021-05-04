import React, {useState,useEffect} from 'react'
import Search from "../components/Search"
import NominationCard from "../components/NominationCard"
const Home = () => {
    const [nominations, setNominations] = useState(localStorage.getItem('nominations') ? JSON.parse(localStorage.getItem('nominations')) : [])

    const addNomination = (movie) => {
        setNominations(prev => [...prev, movie])
    }

    const toggleNomination = async (movie) => {
        if (nominations.some(e => e.imdbID === movie.imdbID)) {
            await setNominations(nominations.filter(item => item.imdbID !== movie.imdbID))
        }
        else if(nominations.length<5){
            await setNominations(prev => [...prev, movie])
        }
    }

    useEffect(() => {
        localStorage.setItem('nominations',JSON.stringify(nominations))
    }, [nominations]);

    const alertStyle = {
        position:"fixed",
        width:"50%",
        right:0,
        left:0,
        bottom:0,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:20,
        zIndex:3,
        textAlign: "center",
        opacity: nominations.length===5 ? 1:0,
        transition:"0.2s"
    }

    console.log(nominations)
    return (<div className="container-fluid" >
        {true  && <div className="alert alert-dismissible alert-primary fade show in" role="alert" style={alertStyle}>5 Nominations Selected</div>}
        <div className="row" style={{textAlign:"center",verticalAlign: "middle"}}>
            <div className="col-lg-6" style={{textAlign:"Left",padding:"10vh 1vw 5vh 15vw"}}>
                <h1 style={{fontSize:30,fontWeight:400}}>S H O P P I E S 🛍️</h1>
                <p>Nominate your 5 favourite movies for the SHOPPIES</p>
                <Search nominations={nominations} toggleNomination={toggleNomination}/>
            </div>
            <div className="col-lg-6" style={{textAlign:"Left",padding:"10vh 5vw 5vh 5vw"}}>
                <h1 style={{fontSize:20,fontWeight:400}}>Nominations</h1>
                <div className="card-deck" style={{width:nominations.slice(0,3).length*33+"%"}}>
                {nominations.slice(0,3).map(movie=><NominationCard key={movie.imdbID} toggle={toggleNomination} movie={movie}/>)}
                
                {/* {nominations.toString()} */}
                </div>
                <div className="card-deck" style={{width:nominations.slice(3,5).length*33+"%"}}>
                {nominations.slice(3,5).map(movie=><NominationCard key={movie.imdbID} toggle={toggleNomination} movie={movie}/>)}
                
                {/* {nominations.toString()} */}
                </div>
            </div>
        </div>
    </div>)
}

export default Home