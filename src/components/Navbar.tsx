import LogoPath from '@/assets/images/logo.webp'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { name: 'Beranda', to: '/' },
  { name: 'Branding UMKM', to: '/branding' },
  { name: 'Event dan Webinar', to: '/webinars' },
  { name: 'Promosi Bisnis', to: '/promote' },
]

function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className={({ isActive }) =>
            isActive
              ? 'px-3 py-2 text-white bg-primary-500 md:bg-transparent text-sm font-medium md:border-b-4 md:border-primary-500 md:text-black'
              : 'duration-300 md:hover:bg-gray-100 px-3 py-2 md:rounded-md text-sm font-medium'
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className='bg-white shadow-sm md:shadow-none'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-row-reverse md:flex-row justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <Link to='/'>
              <img src={LogoPath} alt='Brand Logo' className='h-8 w-auto' />
            </Link>
          </div>
          <div className='hidden md:flex space-x-4'>
            <NavLinks />
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 focus:bg-none rounded-md'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 bottom-0 w-[90vw] bg-white shadow-lg transform transition-transform ease-in-out duration-300 z-50 sm:hidden`}
      >
        <div className='flex flex-col'>
          <NavLinks />
        </div>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden'
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  )
}
