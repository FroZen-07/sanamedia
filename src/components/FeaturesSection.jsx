// components/FeatureList.js

import React from 'react';

const FeatureList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container sm:px-24 px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Services Provided By Us</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <FeatureItem title="Authentic Cliche Forage" />
          <FeatureItem title="Kinfolk Chips Snackwave" />
          <FeatureItem title="Coloring Book Ethical" />
          <FeatureItem title="Typewriter Polaroid Cray" />
          <FeatureItem title="Pack Truffaut Blue" />
          <FeatureItem title="The Catcher In The Rye" />
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button> */}
      </div>
    </section>
  );
};

const FeatureItem = ({ title }) => {
  return (
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span className="title-font font-medium">{title}</span>
      </div>
    </div>
  );
};

export default FeatureList;
