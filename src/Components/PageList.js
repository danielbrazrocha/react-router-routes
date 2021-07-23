import React from 'react'
import { Link } from 'react-router-dom'

export default function PageList() {
    return (
        <div>
            <h3>Try to access some routes:</h3>
            <Link to="/login">
                <h3>Go to LoginPage</h3>
            </Link>
            <Link to="/landing">
                <h3>Go to LandingPage</h3>
            </Link>
            <Link to="/dashboard">
                <h3>Go to DashboardPage</h3>
            </Link>
        </div>
    )
}
