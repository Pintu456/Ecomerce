import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/product' className='proHeader' >Products</Link>
            <Link to='/' className='home'>Home</Link>
        </div>
    )
}

export default Header