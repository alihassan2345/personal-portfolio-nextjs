import React from 'react';
import Social from '../components/Social';

function Contact() {
  return (
    <div
      id="contactus"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 w-full h-auto py-32 lg:px-32 md:px-16 sm:px-8 overflow-hidden"
    >
      <div className="flex sm:flex-col lg:flex-row items-center py-16 lg:py-24">
        {/* Left Section */}
        <div className="lg:w-1/2 sm:w-full space-y-6 lg:pr-12">
          <h1 className="text-yellow-400 font-poppins font-bold text-4xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Contact me for <br /> Collaboration
          </h1>
          <p className="lg:w-3/4 sm:w-full text-gray-300 font-poppins font-light text-lg sm:text-base">
            Reach out today to discuss your project needs and start working on amazing projects!
          </p>
          <div className="flex sm:flex-col lg:flex-row">
            <div className="lg:mt-8 sm:mt-4">
              <Social
                containerStyles="flex gap-6 sm:justify-center lg:justify-start"
                iconStyles="w-10 h-10 border border-yellow-500 rounded-md flex justify-center items-center text-xl text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition duration-300 ease-in-out shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 sm:w-full mt-10 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <input
              className="h-[48px] px-4 py-5 rounded-md border border-gray-700 focus:border-yellow-500 bg-gray-800 font-light text-base text-gray-300 placeholder-gray-500 outline-none transition duration-300 ease-in-out shadow-sm hover:shadow-lg"
              type="text"
              placeholder="First Name"
            />
            <input
              className="h-[48px] px-4 py-5 rounded-md border border-gray-700 focus:border-yellow-500 bg-gray-800 font-light text-base text-gray-300 placeholder-gray-500 outline-none transition duration-300 ease-in-out shadow-sm hover:shadow-lg"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="h-[48px] w-full px-4 py-5 rounded-md border border-gray-700 focus:border-yellow-500 bg-gray-800 font-light text-base text-gray-300 placeholder-gray-500 outline-none transition duration-300 ease-in-out shadow-sm hover:shadow-lg"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="h-[48px] px-4 py-5 rounded-md border border-gray-700 focus:border-yellow-500 bg-gray-800 font-light text-base text-gray-300 placeholder-gray-500 outline-none transition duration-300 ease-in-out shadow-sm hover:shadow-lg"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="pt-8 space-y-6">
            <textarea
              className="min-h-[120px] w-full px-4 py-4 rounded-md border border-gray-700 focus:border-yellow-500 bg-gray-800 font-light text-base text-gray-300 placeholder-gray-500 outline-none resize-y transition duration-300 ease-in-out shadow-sm hover:shadow-lg"
              placeholder="Message"
            ></textarea>
            <button
              className="w-full bg-yellow-500 text-gray-900 font-poppins font-semibold text-md rounded-lg shadow-lg py-3 border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
