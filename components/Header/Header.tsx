import React from "react";
import { HomeIcon, StarIcon, PlusIcon } from '@heroicons/react/24/solid'



function Header() {
  return <div className="sticky bg-[#040714] top-0 z-[10000] flex h-[72px] items-center px-10 md:px-12">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qUu8TCsGrv9KzNhpCB31RlvlcR1kBIh_oOZShuxCzrJhHgZmxswYHNAssFlBdnu9y3Q&usqp=CAU" width={80} height={80} className="cursor-pointer" />
    <div className="hidden ml-10 md:flex items-center space-x-6">
      <a className="header-link group">
        <HomeIcon className="h-4" />
        <span className="span">Home</span>
      </a>
      <a className="header-link group">
        <StarIcon className="h-4" />
        <span className="span">Search</span>
      </a>
      <a className="header-link group">
        <PlusIcon className="h-4" />
        <span className="span">Watchlist</span>
      </a>
      <a className="header-link group">
        <StarIcon className="h-4" />
        <span className="span">Originals</span>
      </a>
      <a className="header-link group">
        <StarIcon className="h-4" />
        <span className="span">Movies</span>
      </a>
      <a className="header-link group">
        <StarIcon className="h-4" />
        <span className="span">Series</span>
      </a>
    </div>
    <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-base hover:text-black transition duration-200">Login</button>
  </div>;
}

export default Header;
