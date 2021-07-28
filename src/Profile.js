import React, { useState, useEffect } from 'react'
import "./Profile.css"
import { Link, useHistory } from 'react-router-dom';
import CloseIcon from "@material-ui/icons/Close"
import StarsIcon from '@material-ui/icons/Stars';
import SettingsIcon from '@material-ui/icons/Settings';
import database from './firebase';

import IconButton  from '@material-ui/core/IconButton'

function Profile(){


    const [animal, setAnimal]= useState([]);


    //Piece of code that runs based on a condition
    useEffect(() => {
        //this is where the code runs
        const unsubscribe = database
        .collection('people')
        .onSnapshot(snapshot => {  //people is the collection name in firebase
            setAnimal(snapshot.docs.map( doc => doc.data()));

            return() => {
                //this is the cleanup
                unsubscribe();
            };
        }) 
    }, []);



    




    return(
        <div>
        <div className="Container">

        


        <div className="tindalCards__cardContainer">

        {animal.map(animals => (
            
            <div
            className="swipe"
            key={animals.name}
            preventSwipe={['up','down']}>
                <div 
                style={{backgroundImage: `url(${animals.url})`}}
                className="card2">  
                </div>


                <div 
                style={{backgroundColor: `white`}}
                className="details__container"
                >  
                <h3>Name: {animals.name} </h3>
                    <h3>Age: {animals.age} years</h3>
                    <h3>City: {animals.location} </h3>
                    <h3>Breed: {animals.breed}</h3>
                </div>
                
                
            </div>
            
        ))}

        </div>





        <div className="swipeButtons">
        
        <Link to="/">
        <IconButton className="swipeButtons__close">
        <CloseIcon fontSize="large" />
        </IconButton>
        </Link>
        


        

        <IconButton className="swipeButtons__favorite">
        <SettingsIcon fontSize="large" />
        </IconButton>

        
        
    </div>
    </div>
    </div>
    );
}

export default Profile