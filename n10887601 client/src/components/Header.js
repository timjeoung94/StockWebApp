import React from 'react';
import {
    NavLink
  } from "react-router-dom";

export default function Header () {
        return (
            <nav style ={{
                        display: "flex",
                        backgroundColor: "lightblue",
                        color: "white",
                        padding: "5px",
                        fontFamily: "Arial",
                        justifyContent: "space-between",
                        alignItems: "center"
                        }}>

                <h1> Stock Prices</h1>
                 <ul style ={{display:"flex",
                            listStyleType: "none",
                            justifyContent: "flex-end",
                            marginBottom: 0
                            
                
                }}>
                     <li style = {{marginLeft: "8px"}}>
                        <NavLink to="/">
                              Home
                        </NavLink>
                    </li>
                    <li style = {{marginLeft: "8px"}}>
                        <NavLink to="/Stocks">
                            Stocks
                        </NavLink>
                    </li>
                     <li style = {{marginLeft: "8px"}}>
                        <NavLink to="/Quote">
                         Quote
                        </NavLink>
                    </li>
                    <li style = {{marginLeft: "8px"}}>
                        <NavLink to="/Charts">
                         Charts
                     </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
