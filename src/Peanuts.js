import React from "react";
import { Link } from "react-router-dom";

function Peanuts() {
    return (
        <div className="Peanuts">
            <p>This item is a bag of peanuts, about the size of a bag of peanuts.</p>
            <p>Peanuts aren't a true nut, but instead are a legume. Dogs love them and I am not a dog.</p>
            <p><strong>FUN FACT:</strong> Peanuts are one of the world's leading causes of peanut allergy related deaths!</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Peanuts;
