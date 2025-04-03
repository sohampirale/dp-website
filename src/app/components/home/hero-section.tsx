import React from "react";
import Image from "next/image";

// interface Props {}

const HeroSection = () => {
  return (
    <>
    <section
      id="hero"
      className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24 overflow-hidden"
    >

      <div className="container mx-auto px-4" id="el-abbeoq2o">
        <div
          className="flex flex-col md:flex-row items-center"
          id="el-rao5uqnh"
        >
          {/* <!-- Text Content --> */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 z-10" id="el-uok5fh7z">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              id="el-904jj1yq"
            >
              Prime Choice to Grow Your Profession
            </h1>
            <p
              className="text-lg md:text-xl mb-8 text-blue-100"
              id="el-q0jbjucu"
            >
              Boost your digital presence with customized strategies that
              deliver measurable results. We help businesses stand out in the
              digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" id="el-zz97in0i">
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-10 py-4 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Explore Services
              </a>

              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 text-white font-medium text-lg px-10 py-4 rounded-full border-2 border-white transition duration-300 transform hover:scale-105 shadow-md"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-12 " id="el-qr9t7i8x">
              <p className="font-medium mb-3" id="el-9ai561pi">
                Trusted by leading brands
              </p>
              <div
                className="flex flex-wrap gap-6 items-center"
                id="el-147ze19s"
              >
                <div className="bg-white/20 p-2 rounded" id="el-2aw5u1nf">
                  <span className="text-sm font-bold" id="el-qwzg4h1m">
                    COMPANY
                  </span>
                </div>
                <div className="bg-white/20 p-2 rounded" id="el-u613krij">
                  <span className="text-sm font-bold" id="el-2esmyro5">
                    BRAND
                  </span>
                </div>
                <div className="bg-white/20 p-2 rounded" id="el-beyk122k">
                  <span className="text-sm font-bold" id="el-m06dpxe5">
                    ENTERPRISE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Mascot/Image Content --> */}
          <div className="w-full md:w-1/2 relative z-10" id="el-h5tp8he1">
            <div className="relative" id="el-dgj9049w">
            <Image
              src="/path-to-your-image.png" // Update with your actual image
              alt="Hero Mascot"
              width={600}
              height={600}
              className="mx-auto max-w-full rounded-lg shadow-2xl border-4 border-white/20"
            />
                      
              <div
              className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg flex flex-col items-center justify-center rotate-6 
              transition-transform duration-300 ease-in-out transform hover:scale-110 animate-float"
              style={{ width: "80px", height: "80px", boxShadow: "0 0 12px rgba(255, 165, 0, 0.7)" }} // Soft Glow
            >
              <span className="text-2xl font-extrabold leading-none drop-shadow-md">
                100%
              </span>
              <span className="text-xs block opacity-90 tracking-wide">
                Success
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Background Elements --> */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-white/5 to-transparent"
      ></div>

      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20"
        id="el-8fqolyk8"
      ></div>

      {/* <!-- Scroll Indicator --> */}
      <div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm mb-2 text-white drop-shadow-md">
            Scroll to explore
          </span>
          <svg
            className="animate-bounce w-6 h-6 text-white drop-shadow-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      <div
  className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-pulse opacity-60"
></div>
<div
  className="absolute bottom-16 left-16 w-4 h-4 bg-white rounded-full animate-pulse opacity-40"
></div>

    </section>
    {/* <svg
  className="absolute bottom-0 left-0 w-full"
  viewBox="0 0 1440 320"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="heroWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{ stopColor: "#1E40AF", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#1E3A8A", stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <path
    fill="url(#heroWaveGradient)"
    d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,176C672,181,768,203,864,186.7C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
</svg> */}
</>  
  );
};

export default HeroSection;
