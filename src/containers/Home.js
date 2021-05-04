import React, {useState} from 'react'
import Search from "../components/Search"
import NominationCard from "../components/NominationCard"
const Home = () => {
    const [nominations, setNominations] = useState([])

    const addNomination = (movie) => {
        setNominations(prev => [...prev, movie])
    }

    const toggleNomination = (movie) => {
        if (nominations.some(e => e.imdbID === movie.imdbID)) {
            setNominations(nominations.filter(item => item.imdbID !== movie.imdbID))
        }
        else{
            setNominations(prev => [...prev, movie])
        }
    }

    return (<div className="container-fluid" >
        <div className="row" style={{textAlign:"center",verticalAlign: "middle"}}>
            <div className="col-lg-6" style={{textAlign:"Left",padding:"10vh 1vw 5vh 15vw"}}>
                <h1 style={{fontSize:30,fontWeight:400}}>S H O P P I E S</h1>
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