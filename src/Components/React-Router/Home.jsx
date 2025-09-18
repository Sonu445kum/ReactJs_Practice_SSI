import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">Home</h1>
            <p className="mb-4">Welcome! This is the Home page.</p>


            {/* link with state (demonstrates useLocation on contact page) */}
            <Link to="/contact" state={{ from: "Home" }} className="underline">
                Go to Contact (with state)
            </Link>


            <div className="mt-4">
                <p>Try a dynamic route:</p>
                <Link to="/users/42" className="text-sm underline">
                    Open user 42 (example of useParams)
                </Link>
            </div>
        </div>
    );

}
