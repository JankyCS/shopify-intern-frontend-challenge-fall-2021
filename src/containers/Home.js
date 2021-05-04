// import React from 'react'
import Searchbar from "../components/Searchbar"
const Home = () => (
    <div className="container-fluid" >
        <div className="row" style={{textAlign:"center",verticalAlign: "middle"}}>
            <div className="col-lg-6" style={{textAlign:"Left",padding:"10vh 1vw 0px 15vw"}}>
                <h1 style={{fontSize:30,fontWeight:400}}>S H O P P I E S</h1>
                <Searchbar/>
            </div>
            <div className="col-lg-6">
            </div>
        </div>
    </div>
);

export default Home