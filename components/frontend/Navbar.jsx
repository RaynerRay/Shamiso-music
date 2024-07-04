'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section>
      <nav>
        <div className="py-2 px-6 bg-[#8d6f12]">
          <div className="flex flex-wrap -mx-4 items-center justify-between">
            <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
              <div className="-mb-4">
                <a className="group mb-4 mr-6 inline-flex items-center text-sm" href="#">
                 
                  <span className="text-black/70 font-bold group-hover:text-purple-200">contact@shamiso.com</span>
                </a>
                <a className="group mb-4 font-bold inline-flex items-center text-sm" href="#">
                 
                  <span className="text-black/70 font-bold group-hover:text-purple-200">+1-202-555-0147</span>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap -mb-4 items-center justify-end">
               
                 
                <div className="ml-6 mb-4">
                  <a className="group mr-6 inline-flex items-center text-sm" href="#">
                  <span className="hidden md:inline-block text-black/70 font-bold group-hover:text-purple-200">Favorites</span>
                    
                  </a>
              
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 py-4 px-6 bg-black border-b-2 border-gray-800">
          <div className="flex h-full -mx-4 items-center justify-between">
            <div className="w-auto sm:w-1/2 xl:w-auto px-4">
              <div className="flex items-center">
                <Link className="inline-block mr-12 font-bold h-9" href="/">
                  <Image height={150} width={150} className="block" src="/logo.png" alt="logo" />
                </Link>
                <div className="hidden xl:block">
                  <Link className="inline-flex mr-10 items-center text-sm font-bold text-gray-100/70 hover:text-rhino-400" href="/">
                    <span className="mr-2">Home</span>
                    
                  </Link>
                  <Link className="inline-flex mr-10 items-center text-sm font-bold text-gray-100/70 hover:text-rhino-400" href="/songs">
                    <span className="mr-2">Songs</span>
                    
                  </Link>
                  <Link className="inline-flex mr-10 items-center text-sm font-bold text-gray-100/70 hover:text-rhino-400" href="/artists">
                    <span className="mr-2">Artists</span>
                    
                  </Link>
                  <a className="inline-flex mr-10 items-center text-sm font-bold text-gray-100/70 hover:text-rhino-400" href="#">Blog</a>
                  <a className="inline-flex items-center text-sm font-bold text-gray-100/70 hover:text-rhino-400" href="#">Contact</a>
                </div>
              </div>
            </div>
            <div className="w-auto sm:w-1/2 xl:w-auto px-4">
              <div className="flex items-center justify-end">
                <div className="hidden md:flex items-center px-6 py-1 border border-gray-200 rounded-full hover:bg-purple-900/40">
                <button className="hidden md:inline-block text-white/70 font-bold hover:text-purple-200">Login</button>
                </div>
                <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="xl:hidden ml-8 text-coolGray-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}>
        <div onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-purple-800 opacity-70"></div>
        <nav className="relative flex flex-col pt-12 pb-6 px-8 w-full h-full bg-white overflow-y-auto">
          <div className="flex mb-12 items-center">
            <a className="inline-block mr-auto" href="#">
              <Image height={32} width={32} className="h-8" src="/coleos-assets/logos/logo-coleos-2.svg" alt="logo" />
            </a>
            <button onClick={() => setMobileNavOpen(false)}>
              v
            </button>
          </div>
          <div className="flex w-full max-w-xs items-center px-6 border border-coolGray-200 rounded-full">
            v
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-3">
                <a className="group mr-6 inline-flex items-center text-base" href="#">
                
                  <span className="font-semibold text-gray-100">Login</span>
                </a>
              </li>
              <li className="mb-3">
                <a className="group mr-6 inline-flex items-center text-base" href="#">
                
                  <span className="font-semibold text-gray-100">Favorite</span>
                </a>
              </li>
              <li className="mb-12">
                <a className="inline-flex items-center text-base text-purple-400 hover:text-purple-200" href="#">
                
                  <span className="font-semibold text-gray-100">Cart</span>
                </a>
              </li>
              <li className="mb-4">
                <a className="flex items-center text-base font-bold text-gray-100" href="#">
                  <span className="mr-2">Home</span>
                  v
                </a>
              </li>
              <li className="mb-4">
                <a className="flex items-center text-base font-bold text-gray-100" href="#">
                  <span className="mr-2">Pages</span>
                  v
                </a>
              </li>
              <li className="mb-4"><a className="flex items-center text-base font-bold text-gray-100" href="#">Products</a></li>
              <li className="mb-4"><a className="flex items-center text-base font-bold text-gray-100" href="#">Blog</a></li>
              <li className="mb-4"><a className="flex items-center text-base font-bold text-gray-100" href="#">Shop</a></li>
              <li><a className="flex items-center text-base font-bold text-gray-100 hover:text-rhino-400" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-center text-sm text-coolGray-400">Coleos Shuffle 2023</p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
