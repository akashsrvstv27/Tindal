import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from "@material-ui/icons/Favorite"

import IconButton  from '@material-ui/core/IconButton'

function SwipeButtons(){
    return(
        <div className="swipeButtons">

        

            <IconButton className="swipeButtons__star">
            <StarIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__replay">
            <ReplayIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__close">
            <CloseIcon fontSize="large" />
            </IconButton>

            

            <IconButton className="swipeButtons__favorite">
            <FavoriteIcon fontSize="large" />
            </IconButton>

            

            
            
        </div>

    );
}

export default SwipeButtons