import React from 'react'
import LogoutBtn from '../Components/LogoutBtn'
import PageList from '../Components/PageList'

export default function DashboardPage() {
    return (
        <div>
            <h1>This is our Admin Dashboard</h1>
            <LogoutBtn />

            <PageList />
        </div>
    )
}
