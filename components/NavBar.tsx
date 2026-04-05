import React from 'react'

export const NavBar = () => {
  return (
    <header className='w-full px-5'>
        <nav className='flex justify-between items-center border-b py-1'>
            <ul className='flex gap-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div>
                <p className='text-2xl font-bold rounded-lg'>Blogger Fairy</p>
            </div>
            <div></div>
        </nav>
    </header>
  )
}
