import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
function Cards(){
    return(
        <div className = "cards">
            <h1>Some Text</h1>
            <div className = "cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <Carditem 
                            src= "Images/adrian-korte-5gn2soeAc40-unsplash.jpg"
                            text = "Some Text Here"
                            label = "Add Label"
                            path = "/services"
                        />

                        <Carditem
                            src='images/bogomil-mihaylov-ekHSHvgr27k-unsplash.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards-items">
                        <Carditem
                            src='images/c-d-x-PDX_a_82obo-unsplash.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <Carditem
                            src='images/mike-giles-IiwYeihxC58-unsplash.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <Carditem
                            src='images/wes-hicks-MEL-jJnm7RQ-unsplash.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards