import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='mt-[50px] flex flex-col items-center'>
        <p>404</p>
        <p>Page not Found</p>
        <p>Go back to <Link to='/'>Home</Link>.</p>
    </div>
  )
}

export default NotFound