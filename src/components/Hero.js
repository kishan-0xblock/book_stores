import React from 'react';
//import Link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-[350px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>BookWala
          </div>
          {/* title */}
          <h1 className="text-[50px] leading-[1.1] font-light mb-4">
            K<br />
            <span className="font-semibold"> </span>
          </h1>
          <Link
            to={'/'}
            className='self-start uppercase font-semibold border-b-2 border-primary'
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
