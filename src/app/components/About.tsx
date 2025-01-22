import React from "react";
import Image from "next/image";

function About() {
  return (
    <div
      id="about"
      className="overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="w-full min-h-screen flex flex-col sm:flex-row items-center pt-12 px-6 sm:px-4">
        {/* Image Section */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-96 xl:h-96 flex justify-center lg:justify-end mb-8 sm:mb-0">
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg ring-4 ring-yellow-500 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:ring-yellow-400">
            <Image
              src="/computerimage.webp"
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3 lg:pl-12 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-6 font-poppins">
            About Me
          </h1>
          <p className="text-base sm:text-lg lg:text-lg leading-relaxed font-poppins">
            My name is{" "}
            <span className="text-yellow-400 font-semibold">Ali Hassan</span>,
            and I am a 16-year-old dedicated Graphic Designer, Web Developer,
            and an enthusiast in Generative AI. I have completed my Intermediate
            from Government National College and my Matriculation from National
            Public School.
          </p>
          <p className="text-base sm:text-lg lg:text-lg leading-relaxed font-poppins mt-4">
            I have developed my skills by mastering Photoshop and video editing,
            as well as gaining expertise in HTML, CSS, JavaScript, Next.js,
            Tailwind CSS, and TypeScript. My projects include a car rental
            website and a dynamic blog called{" "}
            <span className="text-yellow-400 font-semibold">&quot;BlogSphere&quot;</span>.
          </p>
          <p className="text-base sm:text-lg lg:text-lg leading-relaxed font-poppins mt-4">
            Currently, I am working on developing my AI assistant,{" "}
            <span className="text-yellow-400 font-semibold">&quot;Nexa&quot;</span>, which
            is designed to be self-learning and capable of performing advanced
            tasks. I enjoy exploring new technologies and integrating them into
            my work, striving for practical and innovative solutions through
            creativity and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
