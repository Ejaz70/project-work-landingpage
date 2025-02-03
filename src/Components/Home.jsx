import React from "react";
import {
  BiBrush,
  BiCode,
  BiCameraMovie,
  BiMusic,
  BiMoney,
  BiHeart,
  BiData,
} from "react-icons/bi";
import job from "../assets/images/job.png";
import EmployersLogo from "../assets/images/Employers Logo.png";
import { useState } from "react";
<img src={EmployersLogo} alt="Employer Logo" className="w-16 h-16" />;

const categories = [
  {
    name: "Graphics & Design",
    positions: 357,
    icon: <BiBrush className="text-blue-500 text-4xl " />,
  },
  {
    name: "Code & Programming",
    positions: 312,
    icon: <BiCode className="text-blue-500 text-4xl" />,
  },
  {
    name: "Digital Marketing",
    positions: 297,
    icon: <BiCameraMovie className="text-blue-500 text-4xl " />,
  },
  {
    name: "Video & Animation",
    positions: 247,
    icon: <BiMusic className="text-blue-500 text-4xl " />,
  },
  {
    name: "Music & Audio",
    positions: 204,
    icon: <BiMoney className="text-blue-500 text-4xl " />,
  },
  {
    name: "Account & Finance",
    positions: 167,
    icon: <BiHeart className="text-blue-500 text-4xl " />,
  },
  {
    name: "Health & Care",
    positions: 125,
    icon: <BiData className="text-blue-500 text-4xl " />,
  },
  {
    name: "Data & Science",
    positions: 57,
    icon: <BiData className="text-blue-500 text-4xl " />,
  },
];

const jobs = Array(6).fill({
  title: "Technical Support Specialist",
  type: "Internship",
  category: "Education",
  organization: "Technology",
  salary: "$20,000 - $25,000",
  company: "VisionaryTech Group.",
  location: "Innovation, Nevada",
  posted: "1 hr ago",
});

const faqs = [
  {
    id: 1,
    question: "Can I change my plan later?",
    answer:
      "yes you can try us for free for 30 days.if you want well provide with a free personalized 30-minute onboarding call to get you up and running as soon as p[ossible",
  },
  {
    id: 2,
    question: "What is your cancellation policy?",
    answer:
      "yes you can try us for free for 30 days.if you want well provide with a free personalized 30-minute onboarding call to get you up and running as soon as p[ossible",
  },
  {
    id: 3,
    question: "Can other info be added to an invoice?",
    answer:
      "yes you can try us for free for 30 days.if you want well provide with a free personalized 30-minute onboarding call to get you up and running as soon as p[ossible",
  },
  {
    id: 4,
    question: "How does billing work?",
    answer:
      "yes you can try us for free for 30 days.if you want well provide with a free personalized 30-minute onboarding call to get you up and running as soon as p[ossible",
  },
  {
    id: 5,
    question: "How do I change my account email?",
    answer:
      "yes you can try us for free for 30 days.if you want well provide with a free personalized 30-minute onboarding call to get you up and running as soon as p[ossible",
  },
];
// const Home = () => {
//   const [openFAQId, setOpenFAQId] = useState(null);

//   const toggleFAQContent = (id) => {
//     setOpenFAQId((prevId) => (prevId === id ? null : id));
//   };

const Home = () => {
  const [openFAQId, setOpenFAQId] = useState(null);

  const toggleFAQContent = (id) => {
    setOpenFAQId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className=" min-h-screen p-6 mt-1">
      <div className="max-w-6xl mx-auto mt-19">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">
              Find a job that suits your <br />
              <span className="text-[#7030F1]">interest & skills.</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Aliquam vitae turpis in diam convallis finibus <br /> in at risus.
              Nullam in scelerisque leo, eget sollicitudin
            </p>

            <div className="mt-8 p-1 rounded-lg md:w-160 flex border border-gray-300">
              <input
                type="text" // Or type="search" if you prefer
                placeholder="Job, Title, Keyword"
                className="rounded-lg md:w-130 p-3  flex-grow"
              />
              <button className="bg-indigo-600 text-white py-4 px-5 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 ml-2">
                Find Job
              </button>
            </div>
          </div>
          <div>
            <img src={job} alt="Job Search" className="w-full max-w-md" />
          </div>
        </div>

        <div className="bg-gray-100 min-h-screen p-4 mt-30 ">
          <div className="max-w-6xl mx-auto">
            <section className="mb-6 mt-3">
              <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
                  >
                    {category.icon && (
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                        {category.icon}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-lg ">{category.name}</p>
                      <span className="text-gray-500 text-sm">
                        {category.positions} Open positions
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold   mt-7 pl-14">
            Recent Jobs Posted
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-12">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold">
                    {job.title}
                    <span className="text-green-500 ml-2">{job.type}</span>
                    <span className="text-blue-500 ml-2">{job.salary}</span>
                  </h3>
                  <p className="text-gray-500">
                    {job.category} | {job.organization}
                  </p>

                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vel sapien non lacus facilisis tincidunt.
                  </p>
                </div>

                <div className="flex items-center mt-9">
                  <img
                    src={EmployersLogo}
                    alt="Employers Logo"
                    className="w-12 h-12 mr-2"
                  />
                  <div className="">
                    <p className="font-semibold">{job.company}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                    {/* <p className="text-gray-400 text-sm mt-6  ">{job.posted}</p> */}
                  </div>
                </div>

                {/* <p className="text-gray-400 text-sm mt-2 flex">{job.posted}</p> */}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 py-24 flex flex-col">
          <div>
            <div className="flex flex-col items-center gap-5 text-center">
              <h1 className="text-xl lg:text-2xl font-[600]">
                Frequently Asked Questions
              </h1>
              <p className="text-sm lg:text-base">
                Everything you need to know about the product and billing.
              </p>
            </div>

            <div className="mt-9">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b py-7 ">
                  <button
                    className="text-2xl font-semibold flex justify-between w-full text-gray-900 pl-7  "
                    onClick={() => toggleFAQContent(faq.id)}
                  >
                    {faq.question}
                    <span className="h-7 w-4 rounded-br-full border-r-gray-900">
                      {openFAQId === faq.id ? "-" : "+"}
                    </span>
                  </button>
                  {openFAQId === faq.id && (
                    <p className="mt-6 text-gray-900 text-xl">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
