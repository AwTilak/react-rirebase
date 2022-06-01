import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to="login">Click to view our login page</Link>
            <Link to="register">Click to view our register page</Link>
        </div>

    )
}

export default Home