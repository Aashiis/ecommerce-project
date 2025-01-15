import Sidebar from '@/components/admin_components/Sidebar'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="flex h-screen w-full">
                <Sidebar active="Settings" />
                <div className='m-auto text-3xl'>
                    <h1>No special Settings available.</h1>
                </div>
            </div>
        </div>
    )
}

export default page
