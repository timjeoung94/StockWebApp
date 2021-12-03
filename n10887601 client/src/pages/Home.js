import React from 'react';
import logo from "../stocklogo.png";

export default function Home () {
    return (
        <div>
            <h1>Welcome to the Stock Market Portal</h1>
            <p>You may click <b>Stocks</b> on top right section to view all the NASDAQ company</p>
            <p><b>Quote</b> to get the latest 2021 price information of most popular NASDAQ compnay</p>
            <p><b>Charts</b> to see the closing price line chart of most popular NASDAQ company</p>

            <img src={logo} alt="website logo" width="500" height="500"/>
            
        </div>
    );
}