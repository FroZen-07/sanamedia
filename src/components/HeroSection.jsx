// import React from 'react';
import Image from "next/image";

function HeroSection() {
    return (
      <section className="text-gray-600 body-font m-0 border-y-0">
      <div className="container mx-auto flex sm:px-24 px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Coming <span className="text-red-600">Live</span> Soon!!
          </h1>
          <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Get In Touch</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Know More</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
            className="object-cover object-center rounded" alt="hero" src="/coming_soon.jpg" height={720} width={600}
          />
        </div>
      </div>
    </section>

      
    );
  }
  
  export default HeroSection;
  