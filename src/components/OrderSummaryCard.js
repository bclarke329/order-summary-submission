import React, { Component } from 'react';
import illustration from "../images/music-illustration.png"


class Ordersummarycard extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <img src="{illustration}" alt="girl listening to music" />
                </header>
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <button>Proceed to Payment</button><br />
                <button>Cancel Order</button>
            </div>
        );
    }
}

export default Ordersummarycard;
