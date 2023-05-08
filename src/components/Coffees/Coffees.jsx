
import { Button } from 'flowbite-react'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Coffee from '../Coffee/Coffee';

function Coffees() {
    const coffees = useLoaderData();
  return (
    <div className='container py-14 text-center'>
      <h3>--- Sip & Savor ---</h3>
      <h1 className='text-3xl text-orange-950 font-bold my-3'>Our Popular Products</h1>
      <Link to='/coffees' className='flex justify-center'><Button className='bg-[#331A15] hover:bg-[#48231c]'>Add Coffee</Button></Link>
      <div className="py-16 grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {
            coffees?.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
        }
      </div>
    </div>
  )
}

export default Coffees
