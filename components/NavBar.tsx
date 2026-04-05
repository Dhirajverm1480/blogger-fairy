export const NavBar = () => {
  return (
    <header className='sticky top-0 bg-black w-full px-10'>
        <nav className='flex justify-between items-center py-3'>
            <div className="hidden md:block">
                <ul className='flex gap-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>
            <div>
                <p className='text-2xl font-bold rounded-lg'>Blogger Fairy</p>
            </div>
            <div></div>
        </nav>
    </header>
  )
}
