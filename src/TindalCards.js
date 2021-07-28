import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card"
import "./TindalCards.css"
import database from './firebase';
import { Link } from 'react-router-dom';

function TindalCards(){
    // const people = [];
    const [animal, setAnimal]= useState([]);


    //Piece of code that runs based on a condition
    useEffect(() => {
        //this is where the code runs
        const unsubscribe = database
        .collection('people')
        .onSnapshot(snapshot => {  //people is the collection name in firevbase
            setAnimal(snapshot.docs.map( doc => doc.data()));

            return() => {
                //this is the cleanup
                unsubscribe();
            };
        }) 
    }, []);

    //push to array
    // nomrally, people.push('akash','aman')
    //in react, setPeople([...people,'akash','aman'])
    return(
      <div>
        

        <div className="tindalCards__cardContainer">

        {animal.map(animals => (
            
            <TinderCard
            className="swipe"
            key={animals.name}
            preventSwipe={['up','down']} >
                <div 
                style={{backgroundImage: `url(${animals.url})`}}
                className="card">
                    <h3>{animals.name} ({animals.age} years)</h3>

                    <div className="button1">
                    <Link to="">
                    <button>View Profile</button>
                    </Link>
                    </div>
                    
                </div>
                
                
            </TinderCard>
            
        ))}

        </div>

    </div> );
}

export default TindalCards