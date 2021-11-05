import React from "react"
import MusicIcon from '../images/music-icon.png'

const Price = () => {
    return (
        <div className="price">
            <h3>Annual Plan</h3>
            <img src={MusicIcon} alt="music-icon" id="music-icon"/>
            <p className="pricing">$59.99/year</p>
            <button id="change-button">Change</button>
        </div>
    )
}

export default Price