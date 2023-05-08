
import { Navbar } from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbars() {
    return (
        <div className='bg-orange-900'>
            <Navbar
                style={{backgroundColor: 'rgb(119 29 29 / var(--tw-bg-opacity))'}}
                className='w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-6 text-white'
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <img
                        src="https://img.freepik.com/free-vector/national-irish-coffee-day-banner-design_1308-126711.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.1.857259792.1672064733&semt=ais"
                        className="mr-3 h-6 sm:h-9 rounded-full"
                        alt="coffee Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Espresso Emporium
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/pricing">
                        Pricing
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbars
