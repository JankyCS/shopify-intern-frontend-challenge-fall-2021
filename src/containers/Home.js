import React, {useState} from 'react'
import Search from "../components/Search"
const Home = () => {
    const [nominations, setNominations] = useState([])

    const addNomination = (movie) => {
        setNominations(prev => [...prev, movie])
    }


    return (<div className="container-fluid" >
        <div className="row" style={{textAlign:"center",verticalAlign: "middle"}}>
            <div className="col-lg-6" style={{textAlign:"Left",padding:"10vh 1vw 0px 15vw"}}>
                <h1 style={{fontSize:30,fontWeight:400}}>S H O P P I E S</h1>
                <Search addNomination={addNomination}/>
            </div>
            <div className="col-lg-6">
            {nominations.toString()}
            </div>
        </div>
    </div>)
}

export default Home