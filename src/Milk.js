import React from "react";
import { Link } from "react-router-dom";

function Milk() {
    return (
        <div className="Milky">
            <p>This item is a can of milk. Luckily, the vending machine is refridgerated...</p>
            <p>Mammals produce milk to feed their young. Humans are the only animals to drink the milk of other species,
                and are also the only animals to drink milk past infancy.</p>
            <p><strong>FUN FACT:</strong> The first guy to milk a cow had a very hard time explaining what he was doing to his friends.</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Milk;
