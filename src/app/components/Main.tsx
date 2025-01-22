import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="w-full h-full bg-gray-900 pt-16 transition-all duration-300 ease-in-out">
      <div className="flex sm:flex-col items-center py-16 lg:flex-row transition-all duration-300 ease-in-out">
        {/* Left Section (Text) */}
        <div className="lg:w-3/4 lg:px-32 lg:text-left sm:px-0 sm:w-full sm:text-center lg:order-none sm:order-2">
          <h1 className="lg:text-6xl text-white font-Poppins font-bold sm:text-4xl sm:text-center transition-all duration-300 ease-in-out">
            Ali Hassan
          </h1>
          <h1 className="lg:text-3xl font-semibold font-Poppins text-yellow-500 py-3 sm:text-xl transition-all duration-300 ease-in-out">
            Web Developer | Graphic Designer
          </h1>
          <p className="lg:text-sm text-white px-1 py-2 sm:text-base transition-all duration-300 ease-in-out">
            My name is Ali Hassan and I am a skilled graphic designer and web
            developer. After learning Photoshop and video editing, I have gained
            expertise in HTML, CSS, JavaScript, Next.js, Tailwind CSS, and
            TypeScript. My projects include a car rental website and a dynamic
            blog called &quot;BlogSphere&quot;. I have a passion for learning new
            technologies and improving my skills. Currently, I am working on
            creating my AI assistant, &quot;Nexa&quot;. I always strive to find creative
            and practical solutions.
          </p>
          <div className="flex py-4 space-x-8 lg:justify-start sm:justify-center lg:scale-100 sm:scale-75 transition-all duration-300 ease-in-out">
            <button className="text-main bg-yellow-500 font-Poppins font-semibold text-md rounded-lg shadow-lg py-2 px-4 border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-colors duration-300 transform hover:scale-105">
              Download CV
            </button>
            <button className="text-yellow-500 bg-transparent font-Poppins font-semibold text-md rounded-lg shadow-lg border-2 border-yellow-500 py-2 px-7 hover:bg-yellow-500 hover:text-main transition-colors duration-300 transform hover:scale-105">
              Let&apos;s Talk
            </button>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="w-1/4 flex lg:justify-end lg:scale-100 lg:mx-32 sm:mx-auto sm:scale-75 sm:justify-center lg:order-none sm:order-1">
          <div className="relative">
            {/* Circle frame for the image */}
            <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110">
              {/* Profile image */}
              <Image
                src="/ali hassan-doit.pk.jpg"
                alt="Profile Image"
                layout="intrinsic"
                width={640}
                height={640}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="lg:px-32 pt-4 grid grid-cols-3 sm:px-0 gap-8">
        {/* Stat 1 */}
        <div className="flex space-x-4 items-center lg:flex-row sm:flex-col transition-all duration-300 ease-in-out">
          <h1 className="lg:text-6xl text-white font-jetbrainsmono font-bold sm:text-4xl transition-all duration-300 ease-in-out">
            01
          </h1>
          <h1 className="text-sm text-white font-jetbrainsmono font-light">
            Years Of <br /> Experience
          </h1>
        </div>

        {/* Stat 2 */}
        <div className="flex space-x-4 items-center lg:flex-row sm:flex-col transition-all duration-300 ease-in-out">
          <h1 className="lg:text-6xl text-white font-jetbrainsmono font-bold sm:text-4xl transition-all duration-300 ease-in-out">
            05
          </h1>
          <h1 className="text-sm text-white font-jetbrainsmono font-light">
            Projects <br /> Completed
          </h1>
        </div>

        {/* Stat 3 */}
        <div className="flex space-x-4 items-center lg:flex-row sm:flex-col transition-all duration-300 ease-in-out">
          <h1 className="lg:text-6xl text-white font-jetbrainsmono font-bold sm:text-4xl transition-all duration-300 ease-in-out">
            06
          </h1>
          <h1 className="text-sm text-white font-jetbrainsmono font-light">
            Technologies <br /> Mastered
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
