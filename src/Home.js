import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <h1>Vending Machine!</h1>
            <ul>
                <li>
                    <Link to="/3musketeers">
                        3 Musketeers
                    </Link>
                </li>
                <li>
                    <Link to="/peanuts">
                        Peanuts
                    </Link>
                </li>
                <li>
                    <Link to="/milk">
                        Milk
                    </Link>
                </li>
            </ul>
            <p>Please refresh the page after clicking a link. I can't figure out what's going on.</p>
        </div>
    );
}

export default Home;
