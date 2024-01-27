// import React from 'react';
import Image from "next/image";

function Header() {
  return (
    <header className="text-gray-600 bg-gray-50 body-font m-0 border-x-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src="/logo_sana_media.jpg"
            alt="Sana Media"
            width={60}
            height={30}
          />
          <span className="ml-3 text-3xl">
            <span className="text-red-600">Sana</span> Media
          </span>
        </a>
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Services</a>
          </nav> */}
        {/* <button className="md:ml-auto flex flex-wrap items-center bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-200 rounded text-base text-white mt-4 md:mt-0">
            Get in Touch
          </button>  */}
      </div>
    </header>
  );
}

export default Header;
