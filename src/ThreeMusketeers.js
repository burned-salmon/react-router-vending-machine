import React from "react";
import { Link } from "react-router-dom";

function ThreeMusketeers() {
    return (
        <div className="ThreeMusketeers">
            <p>This item is a king-size 3 Musketeers bar.</p>
            <p>3 Musketeers is a candy bar made from light, whipped nougat coated in chocolate. A lot of people don't like them... but I do.</p>
            <p><strong>FUN FACT:</strong> 3 Musketeers bars can float in water!</p>
            <p><strong>BONUS FUN FACT:</strong> This React component had to be written as "ThreeMusketeers" instead of "3Musketeers" because component names are not allowed to start with a number.</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default ThreeMusketeers;
