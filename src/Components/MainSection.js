import React from 'react'
import Button from './Button'
import './MainSection.css'
import '../App.css'

function MainSection(){

    return(
        <div className = "main-container">
            <video src= "/Videos/Person Playing A Guitar.mp4" autoPlay loop muted />
            <h1>Music</h1>
            <p>Lives Through Us</p>
            <div className = "main-btns">
                <Button
                    className = 'btns'
                    buttonSize = 'btn--large'
                    buttonStyle = 'btn--outline'
                >
                    Get Started
                </Button>

                <Button
                    className='btns'
                    buttonSize='btn--large'
                    buttonStyle='btn--primary'
                >
                    Watch Trailer <i className = "far fa-play-circle"></i>
                </Button>
                
            </div>

        </div>

    )
}

export default MainSection