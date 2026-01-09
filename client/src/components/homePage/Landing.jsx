import React from 'react'

function Landing() {
    return (
        <div className='w-full h-[80vh] '>
            <div className="w-full h-full relative">
                <video
                    src="https://res.cloudinary.com/dqk8v040t/video/upload/v1767892495/main_mobv3a.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover absolute object-center max-h-[80vh] sm:max-h-[50vh] md:max-h-[80vh] lg:max-h-[80vh] rounded-none"
                    style={{ aspectRatio: "16/9" }}
                />
                <div className="absolute z-50 w-full h-full flex flex-col justify-center items-center text-white bg-black/50">
                    <h1 className="text-5xl md:text-7xl font-black drop-shadow-2xl mb-6 text-center tracking-tight">
                        Swift Shift & Shine
                    </h1>
                    <p className="text-xl md:text-2xl font-normal mb-10 text-center max-w-2xl drop-shadow-md">
                        Professional cleaning, trusted by Canadian homes.
                    </p>
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 rounded-md shadow-md transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 text-lg"
                    >
                        Book Your Cleaning
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing