import React from "react";
import Image from "next/image";

// interface Props {}

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24 overflow-hidden relative"
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
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-center"
                id="el-j40btzo6"
                target="_self"
              >
                Explore Services
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-white hover:text-blue-600 text-white font-medium px-8 py-3 rounded-full border-2 border-white transition duration-300 text-center"
                id="el-xfisjepn"
                target="_self"
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
              src="https://placehold.co/600x600?text=Digital Growth Mascot Character"
              alt="Digital Growth Mascot Character"
              width={600}
              height={600}
              className="mx-auto max-w-full rounded-lg shadow-2xl border-4 border-white/20"
            />{" "}
              <div
                className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg flex flex-col items-center justify-center"
                id="el-pszug96d"
                style={{ width: "80px", height: "80px" }}
              >
                <span className="text-2xl font-bold leading-none" id="el-w7lmv3bv">
                  100%
                </span>
                <span className="text-xs block" id="el-tl8ne4vl">
                  Success
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Background Elements --> */}
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"
        id="el-yen6433u"
      ></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20"
        id="el-8fqolyk8"
      ></div>

      {/* <!-- Scroll Indicator --> */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        id="el-984h6qlr"
      >
        <span className="text-sm mb-2" id="el-zkycpo0j">
          Scroll to explore
        </span>
        <svg
          className="animate-bounce w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="el-e0r1s7rc"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            id="el-aqp9m8o3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
