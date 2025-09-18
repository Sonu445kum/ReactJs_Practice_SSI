import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserProfile() {
    const { id } = useParams();
    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">User Profile</h1>
            <p>Showing profile for user with id: <strong>{id}</strong></p>
        </div>
    )
}


