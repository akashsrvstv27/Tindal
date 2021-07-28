import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import "./Header.css"
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({backButton, hideChat}){



    const history= useHistory();




    return(
        <div className="header">

            {backButton ? (
                
                    <IconButton onClick={() => history.replace(backButton)}>
                        <ArrowBackIosIcon fontSize="large" className="header__icon"/>

                    </IconButton>
                   
            ) :
            (

                <Link to="/profile">
                    <IconButton>
                        <PersonIcon fontSize="large" className="header__icon"/>
                    </IconButton>
                </Link>

            )}



            


            
            <Link to="/">
            <img className="header__logo" src="./mylogo.png" alt=""/>
            </Link>




            {hideChat ? (
                <h3>Pet's profile!</h3>

            ):
            (
                <Link to="/chat">
                    <IconButton>
                        <ForumIcon fontSize="large" className="header__icon"/>
                    </IconButton>
                </Link>
            )}
            



        </div>
    )
}

export default Header