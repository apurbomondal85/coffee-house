
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbars from '../../Share/Header/Navbar';
import { Card } from 'flowbite-react';

function ViewCoffee() {
    const coffee = useLoaderData();
    const {name, chef, supplier, taste, category, details, photo} = coffee;
    return (
        <div>
            <Navbars></Navbars>
            <div className='container py-16 bg-[#F4F3F0]'>
                <div className="flex items-center gap-12 p-20">
                    <div className='w-full'>
                        <img src={photo} className='w-full' alt="coffee" />
                    </div>
                    <div className="space-y-3 w-full">
                        <p><strong>Name</strong> : {name}</p>
                        <p><strong>Chef</strong> : {chef}</p>
                        <p><strong>Supplier</strong> : {supplier}</p>
                        <p><strong>Taste</strong> : {taste}</p>
                        <p><strong>Category</strong> : {category}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCoffee
