'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props{

    path?:string,   
    name?:string;
}



const HeaderMenu = ({ path, name }: Props) => {
  const currentPath = usePathname();
  const isActive = currentPath === path;

  return (
    <Link
      href={path || ''}
      className={`relative flex gap-9 flex-wrap px-5 border-slate-700 hover:bg-white/5 transition ease-linear duration-150 py-2 ${
        isActive
          ? 'text-red-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-red-500'
          : 'text-gray-300'
      }`}
    >
      {name}
    </Link>
  );
}

export default HeaderMenu
