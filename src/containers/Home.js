import React, {useState} from 'react'
import Search from "../components/Search"
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
            <div className="col-lg-6" style={{textAlign:"Left",padding:"10vh 15vw 5vh 1vw"}}>
                {nominations.toString()}
            </div>
        </div>
    </div>)
}

export default Home