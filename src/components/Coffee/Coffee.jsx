
import { Button, Card } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

function Coffee({ coffee }) {
    const { _id, name, chef, photo } = coffee;

    const deleteCoffee = (id) =>{
        fetch(`http://localhost:5000/coffees/${id}`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <Card
            horizontal={true}
            imgSrc={photo}
        >
            <div className="w-full flex gap-8">
                <div className='text-left'>
                    <h5>
                        <strong>Name</strong> : {name}
                    </h5>
                    <p>
                        <strong>Chef</strong> : {chef}
                    </p>
                    <p>
                        <strong>Price</strong> : 15$
                    </p>
                </div>
                <div>
                    <Link to={`/coffees/${_id}`}><Button className='bg-[#6e4c25]'>View</Button></Link>
                    <Link to={`/update/${_id}`}><Button className='bg-[#256e4d] my-3'>Edit</Button></Link>
                    <Button onClick={() => deleteCoffee(_id)} className='bg-[#701717]'>Delete</Button>
                </div>
            </div>
        </Card>
    )
}

export default Coffee
