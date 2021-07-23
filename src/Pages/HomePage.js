import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            <h1>This is our HomePage</h1>
            <Link to="/login">
                <h3>Go to LoginPage</h3>
            </Link>
        </div>
    )
}
