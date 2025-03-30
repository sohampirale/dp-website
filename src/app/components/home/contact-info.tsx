import React from "react";

// interface Props {}

const ContactInfoComponent = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4" id="el-lxmaju5b">
        {/* <!-- Section Header --> */}
        <div className="text-center mb-16" id="el-jmvrup97">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            id="el-2fts6hut"
          >
            Get In Touch
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            id="el-3vuc42le"
          >
            Ready to grow your digital presence? Reach out to our team for a
            personalized strategy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12" id="el-scxf9tiv">
          {/* <!-- Contact Form --> */}
          <div
            className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-md"
            id="el-wzdogywv"
          >
            <h3
              className="text-2xl font-bold text-gray-900 mb-6"
              id="el-mtugtf4o"
            >
              Send Us a Message
            </h3>

            <form id="contactForm" className="space-y-6">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                id="el-ilo1157h"
              >
                <div id="el-jvvtrflu">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    id="el-dm06qjgw"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>

                <div id="el-dsgpt3kq">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    id="el-jul3fyab"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
              </div>

              <div id="el-0yvkd2m2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  id="el-bydggox4"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>

              <div id="el-2xagyn2w">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  id="el-4jyzk411"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                >
                  <option value="" id="el-0z23hgfg">
                    Select a service
                  </option>
                  <option value="Digital Marketing" id="el-h5gwnb4x">
                    Digital Marketing
                  </option>
                  <option value="SEO" id="el-sa7ui0mk">
                    SEO
                  </option>
                  <option value="Social Media Management" id="el-2lr9z3rs">
                    Social Media Management
                  </option>
                  <option value="Content Creation" id="el-jwbrqrc8">
                    Content Creation
                  </option>
                  <option value="Other" id="el-sxgu7glk">
                    Other
                  </option>
                </select>
              </div>

              <div id="el-tdh3uqyk">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  id="el-0f9uckpn"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                ></textarea>
              </div>

              <div className="flex items-start" id="el-x1cjqyvp">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="privacy"
                  className="ml-2 block text-sm text-gray-700"
                  id="el-zf2h0stg"
                >
                  I agree to the privacy policy and terms of service.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
                id="el-2yigfmy4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* <!-- Contact Information & Map --> */}
          <div className="w-full lg:w-1/2" id="el-zkukvauu">
            {/* <!-- Contact Information --> */}
            <div
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-md mb-8"
              id="el-ltgqmjw3"
            >
              <h3 className="text-2xl font-bold mb-6" id="el-t9u863qf">
                Contact Information
              </h3>

              <div className="space-y-6" id="el-lxzuizak">
                <div className="flex items-start" id="el-nz0xw16t">
                  <div className="flex-shrink-0 mt-1" id="el-6sb1ijcn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="el-qc2tuxzz"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        id="el-92ueptgw"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        id="el-5ivc2el8"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4" id="el-nviyyexm">
                    <h4 className="text-lg font-semibold" id="el-q3m7wp1f">
                      Our Office
                    </h4>
                    <p className="mt-1" id="el-h3ky3gli">
                      123 Digital Avenue, Marketing District
                    </p>
                    <p id="el-67o0iwff">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start" id="el-4bhcxj0q">
                  <div className="flex-shrink-0 mt-1" id="el-4cupb70a">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="el-j66hrgao"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        id="el-e74lbhfi"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4" id="el-f0a38x5g">
                    <h4 className="text-lg font-semibold" id="el-0eu4wbeq">
                      Phone
                    </h4>
                    <p className="mt-1" id="el-lvqc1fu1">
                      +1 (555) 123-4567
                    </p>
                    <p id="el-0t6xsle5">Mon-Fri, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start" id="el-hkad0d71">
                  <div className="flex-shrink-0 mt-1" id="el-h4p6g4bw">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="el-qtndnw63"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        id="el-l3mqfsc9"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4" id="el-dx168c5d">
                    <h4 className="text-lg font-semibold" id="el-cephp8dl">
                      Email
                    </h4>
                    <p className="mt-1" id="el-7zyqj0i4">
                      info@dpdigital.com
                    </p>
                    <p id="el-2vxi7jd1">support@dpdigital.com</p>
                  </div>
                </div>

                {/* <!-- Social Media Links --> */}
                <div className="pt-4" id="el-9qil1i87">
                  <h4 className="text-lg font-semibold mb-3" id="el-yrwkh3o3">
                    Connect With Us
                  </h4>
                  <div className="flex space-x-4" id="el-159ggkpa">
                    <a
                      href="#"
                      className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition duration-300"
                      id="el-mnhdorub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        id="el-airofo1r"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                          id="el-ohxxm5ab"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition duration-300"
                      id="el-asbac96c"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        id="el-nj9diowe"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                          id="el-zgi2x1yw"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition duration-300"
                      id="el-qaojd8du"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        id="el-l8x3o29v"
                      >
                        <path
                          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                          id="el-ol2cfduq"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition duration-300"
                      id="el-2pz91vpi"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        id="el-gt0z55jh"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          clipRule="evenodd"
                          id="el-iv6cqyjo"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Google Map --> */}
            <div
              className="rounded-xl overflow-hidden shadow-md h-80 bg-gray-200"
              id="el-a9oc3ytv"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872386166!3d40.74076997932724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1690835356119!5m2!1sen!2sus"
                width="100%"
                height="100%"
                
                loading="lazy"
                className="w-full h-full"
                id="el-cr0mh48y"
              ></iframe>
            </div>
          </div>
        </div>

        

        
      </div>
    </section>
  );
};

export default ContactInfoComponent;
