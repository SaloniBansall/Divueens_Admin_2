import React from 'react'

const NotFound = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
                <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
                <a
                    href="/"
                    className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-700"
                >
                    Go to Home
                </a>
            </div>
        </>
    )
}

export default NotFound
