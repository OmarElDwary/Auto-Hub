import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440x] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href={"/"} className="flex justify-center items-center">
                <h3 className='font-bold text-2xl'>Auto-Hub</h3>
            </Link>

            <CustomButton
                title="Anmelden"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            />
        </nav>
    </header>
  )
}

export default Navbar