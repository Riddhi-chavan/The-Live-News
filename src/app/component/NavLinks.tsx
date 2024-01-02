'use client'
import React from 'react'
import { categories }  from '../../../constant'
import PerNavlink from './PerNavlink'
import { usePathname } from 'next/navigation'



function NavLink() {
  const Pathname  = usePathname();
  const isActive =  (path :string ) => {
    return Pathname?.split('/').pop() === path ;
  }

  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4  pb-10 max-w-6xl mx-auto border-b dark:text-gray-100'>
      {categories.map((category) => (
          <PerNavlink  key={category}  category={category} isActive={isActive(category)}/>
      ))}
    </nav>
  );
}

export default NavLink

