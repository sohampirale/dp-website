import React from "react";
import { ClientLogo } from "./client-logo";
import StatisticCard from "./client/metrices";
import SuccessStoryCard from "./client/success-story";

// interface Props {}

const OurClientComponents = () => {
  const clientLogos = [
    {
      id: "el-pcfjrb5l",
      src: "https://placehold.co/120x60?text=Client Logo 1",
      alt: "Client Company Logo 1",
    },
    {
      id: "el-chxvdpts",
      src: "https://placehold.co/120x60?text=Client Logo 2",
      alt: "Client Company Logo 2",
    },
    {
      id: "el-gkcaw5fq",
      src: "https://placehold.co/120x60?text=Client Logo 3",
      alt: "Client Company Logo 3",
    },
    {
      id: "el-m7nq2t1e",
      src: "https://placehold.co/120x60?text=Client Logo 4",
      alt: "Client Company Logo 4",
    },
    {
      id: "el-y07kt2po",
      src: "https://placehold.co/120x60?text=Client Logo 5",
      alt: "Client Company Logo 5",
    },
    {
      id: "el-14eab2hz",
      src: "https://placehold.co/120x60?text=Client Logo 6",
      alt: "Client Company Logo 6",
    },
  ];

  // SVG Icons
  const HappyClientsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const CampaignsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );

  const ROIIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const statisticsData = [
    {
      icon: <HappyClientsIcon />,
      number: 500,
      numberSuffix: "+",
      title: "Happy Clients",
      description:
        "Businesses achieving their digital marketing goals with our strategies.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <CampaignsIcon />,
      number: 1250,
      numberSuffix: "+",
      title: "Campaigns Delivered",
      description: "Successful campaigns driving measurable business results.",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      icon: <ROIIcon />,
      number: 320,
      numberSuffix: "%",
      title: "Average ROI",
      description: "Return on investment our clients typically experience.",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
  ];

  const successStoriesData = [
    {
      logo: "https://placehold.co/80x80?text=RetailPlus Logo",
      companyName: "RetailPlus",
      testimonial:
        "Increased online sales by 175% in the first quarter after implementing our comprehensive digital strategy.",
      tags: [
        { label: "E-commerce", color: "bg-blue-100 text-blue-800" },
        { label: "Social Media", color: "bg-purple-100 text-purple-800" },
      ],
    },
    {
      logo: "https://placehold.co/80x80?text=GreenTech Logo",
      companyName: "GreenTech",
      testimonial:
        "Reduced customer acquisition costs by 42% while generating 3x more qualified leads through targeted SEO.",
      tags: [
        { label: "SEO", color: "bg-green-100 text-green-800" },
        { label: "Content", color: "bg-blue-100 text-blue-800" },
      ],
    },
    {
      logo: "https://placehold.co/80x80?text=Innovate Inc Logo",
      companyName: "Innovate Inc",
      testimonial:
        "Achieved 230% growth in lead generation through integrated marketing campaigns and content strategy.",
      tags: [
        { label: "PPC", color: "bg-orange-100 text-orange-800" },
        { label: "Email", color: "bg-indigo-100 text-indigo-800" },
      ],
    },
  ];

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="container mx-auto px-4" id="el-fuy4npec">
        <div className="text-center mb-16" id="el-lbaq7jft">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            id="el-bpxkowae"
          >
            Our Happy Clients
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            id="el-fa16xi3b"
          >
            Join hundreds of businesses that have achieved remarkable growth
            through our digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statisticsData.map((stat, index) => (
            <StatisticCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              numberSuffix={stat.numberSuffix}
              title={stat.title}
              description={stat.description}
              bgColor={stat.bgColor}
              textColor={stat.textColor}
            />
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Success Stories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStoriesData.map((story, index) => (
              <SuccessStoryCard key={index} {...story} />
            ))}
          </div>
        </div>

        <div id="el-tjd3j9c2">
          <h3
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            id="el-ybnzq211"
          >
            Trusted By
          </h3>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            id="el-ek76osiw"
          >
            {clientLogos.map((logo) => (
              <ClientLogo
                key={logo.id}
                id={logo.id}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center" id="el-2rb2hq7b">
          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            id="el-msghaojl"
          >
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto" id="el-ucut4z9b">
            Let&apos;s discuss how our digital marketing solutions can help your
            business achieve remarkable growth.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300"
            id="el-z4ofixwj"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurClientComponents;
