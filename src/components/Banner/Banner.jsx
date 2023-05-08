
import { Button } from 'flowbite-react'
import React from 'react'

function Banner() {
    return (
        <div className='h-[600px] w-full bg-banner bg-no-repeat bg-cover bg-bottom py-14'>
            <div className="w-full h-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-6 relative">
                <div className='text-white absolute left-1/2 top-1/2 translate-y-[-50%]'>
                    <h1 className='text-5xl font-bold'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='my-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <Button className='bg-[#E3B577] hover:bg-[#fdbd69]'>Learn More</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner
