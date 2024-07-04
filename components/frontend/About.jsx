import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-28 bg-black overflow-hidden ">
      <div className="container mx-auto px-4">
        <div className="relative z-10 flex flex-wrap justify-center items-center ">
          <div className="w-full md:w-1/2 ">
            <h2 className="mb-5 font-heading font-bold text-6xl sm:text-7xl text-white">
              Shamiso
            </h2>
            <p className="mb-16 text-gray-300 text-lg">
              Shamiso Music and Entertainment (SME) is a subsidiary of the
              Shamiso Group, a media-entertainment-technology firm founded in
              1995. SME is an independent record label, music distributor, music
              publisher and consultancy firm. Offices and representation in
              South Africa, Zimbabwe, Nigeria, USA, Ghana, Tanzania, Eswatini,
              Zambia, Botswana, Democratic Republic of Congo and Congo
              Brazzaville.
            </p>
            <div className="flex flex-wrap -m-1.5 mb-8 md:max-w-xl">
              <div className="w-full md:flex-1 lg:w-auto p-1.5">
                <div className="p-px bg-gradient-cyan focus-within:ring-4 focus-within:ring-indigo-500 rounded-full">
                  <button
                    className="w-full px-6 py-4 placeholder-gray-300 text-base text-gray-300 bg-gray-900 outline-none rounded-full"
                    type="text"
                  >
                    Visit Our Global Distribution
                    </button>
                </div>
              </div>
              <div className="w-full md:w-auto p-1.5">
                <button className="group relative font-heading py-4 px-12 block w-full md:w-auto text-lg text-gray-900 font-semibold bg-white hover:bg-gray-50 overflow-hidden rounded-full">
                  <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-cyan"></div>
                  <p className="relative z-10">Record With Us</p>
                </button>
              </div>
            </div>
            <p className="md:max-w-xs md:pr-16 text-sm text-gray-400">
              <span className="text-white">1200+ Artists</span>
              <span> are already using us to launch their careers</span>
            </p>
          </div>
        </div>
        <Image
          className="absolute left-0 bottom-0 transform"
          src="https://static.shuffle.dev/components/preview/1ab04950-6e51-4cac-8432-f7313e765c0b/assets/public/gradia-assets/elements/cta/radial4.png"
          alt=""
          width={500}
          height={500}
        />
        <Image
          className="absolute right-0 top-0 left-50 transform"
          src="https://static.shuffle.dev/components/preview/1ab04950-6e51-4cac-8432-f7313e765c0b/assets/public/gradia-assets/elements/cta/radial5.png"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default About;
