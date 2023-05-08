
import React from 'react'
import img1 from '../../assets/image/icons/1.png'
import img2 from '../../assets/image/icons/2.png'
import img3 from '../../assets/image/icons/3.png'
import img4 from '../../assets/image/icons/4.png'

function Services() {
    return (
        <div className='py-12 bg-[#ECEAE3]'>
            <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="max-w-sm p-6 rounded-lg">
                    <img src={img1} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Awesome Aroma</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="max-w-sm p-6 rounded-lg">
                    <img src={img2} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">High Quality</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">We served the coffee to you maintaining the best quality</p>
                </div>
                <div className="max-w-sm p-6 rounded-lg">
                    <img src={img3} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Pure Grades</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className="max-w-sm p-6 rounded-lg">
                    <img src={img4} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Proper Roasting</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    )
}

export default Services
