import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <nav className=" bg-[#0D172A]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <a href="" className="flex items-center space-x-3 ">
            <img src="./images/logo.png" className="h-8" alt="" />
            <span className=" text-2xl font-bold whitespace-nowrap dark:text-white">
              Skillify
            </span>
          </a>
        </div>
      </nav>

      <section className="overflow-hidden px-40 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#070A0E]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-11/12 px-3 sm:px-4 xl:w-1/2">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/7242772/pexels-photo-7242772.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="w-full rounded-2xl"
                    />
                  </div>
                  <div className=" py-5 ">
                    <img
                      src="https://images.pexels.com/photos/5554250/pexels-photo-5554250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.pexels.com/photos/4049870/pexels-photo-4049870.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-6 text-lg text-gray-200 font-semibold text-primary">
                  About Us
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] opacity-95">
                  <span className="text-[#0038FF] ">Skillify:</span> Empowering
                  Skill Exchange and Growth
                </h2>
                <p className="mb-6 text-base text-body-color dark:text-dark-6 text-gray-400">
                  Skillify is your gateway to a world of learning and knowledge
                  exchange. We connect passionate individuals who want to share
                  their expertise with enthusiastic learners eager to expand
                  their skillset. Whether you're a coding wiz yearning to mentor
                  aspiring programmers or a baking enthusiast excited to teach
                  cake decorating, Skillify empowers you to learn, teach, and
                  connect in a vibrant and supportive community.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6 text-gray-400">
                  Traditional learning methods often present limitations. Formal
                  education can be expensive, require fixed schedules, and might
                  be geographically restrictive. Finding the perfect mentor
                  through personal networks can be a challenge, and
                  opportunities to share your knowledge might be limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[#070A0E] px-40">
        <div className="px-6 py-10 ">
            <h1 className=" font-semibold lg:text-3xl dark:text-white">Our Values</h1>
            <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>

            <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                    <div className="space-y-3">
                        <span className="inline-block p-3 dark:text-white bg-[#0038FF] rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </span>
                        <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Community</h1>
                        <p className="text-gray-400 ">
                            We foster a supportive and inclusive environment where everyone feels welcome to learn and contribute.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <span className="inline-block p-3 dark:text-white bg-[#0038FF] rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>
                        <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Collaboration</h1>
                        <p className="text-gray-400">
                        We believe in the power of collaborative learning and mutual exchange of skills.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <span className="inline-block p-3 dark:text-white bg-[#0038FF] rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>
                        <h1 className="text-xl font-semibold text-gray-700  dark:text-white">Empowerment</h1>
                        <p className="text-gray-400">
                        We empower individuals to take control of their learning journey and achieve their full potential.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <span className="inline-block p-3 rounded-xl dark:text-white bg-[#0038FF]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>
                        <h1 className="text-xl font-semibold text-gray-700  dark:text-white">Lifelong Learning</h1>
                        <p className="text-gray-400">
                        We promote continuous learning as a cornerstone of personal and professional growth.
                        </p>
                    </div>
                </div>

                <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                    <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXAlMjBkaXNjdXNzaW9ufGVufDB8fDB8fHww" alt=""/>
                </div>
            </div>
        </div>
        </section>

        <section className="bg-[#070A0E] px-40 pt-24">
           <h2 className="text-2xl font-semibold text-center text-white mb-4">Ready to Join the Skill Exchange?</h2>
            <p className="px-20 text-lg text-center text-gray-400 pb-12">Sign up for a free Skillify account today and start exploring the vast range of skills offered by our vibrant community. Whether you're seeking to learn a new language, master a creative skill, or share your expertise with others, Skillify is the perfect platform to empower your learning journey.</p>
         </section>

      <Footer />
    </>
  );
};

export default About;
