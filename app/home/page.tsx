'use client'
import Heading from "@/modules/components/Heading"
import Head from "next/head";
import { Form, Input, Button, Modal } from "antd";
import React from "react";
import RequestForm from "@/modules/home/request-form";

const keyHighlights = [
    {title: "30,000+", description: "Students Trained",color:'yellow'},
    {title: "10+", description: "Years of Experience", color:'blue'},
    {title: "10000+", description: "Corporate Professionals Trained",},
]



const HomePage =() =>{
    const [open, setOpen] = React.useState(false);
    return(
        <>
          <div id="home" className=" h-full flex flex-col justify-center items-center ">
            <div className="relative flex flex-col md:flex-row items-center  h-full justify-between w-full max-w-6xl px-6 py-16 gap-8">
                <div className="flex-1 h-full flex  flex-col gap-7 z-10 relative ">
                    {/* Decorative graphics behind content */}
                    <div className="absolute inset-0 -z-10 pointer-events-none">
                        {/* Example: Blurred colored circles */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-70 animate-pulse" />
                        <div className="absolute bottom-0 right-0 w-52 h-52 bg-emerald-200 rounded-full filter blur-2xl opacity-50 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-100 rounded-full filter blur-xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
                        {/* Animated sparkles */}
                          <div className="absolute top-8 left-1/4 animate-pulse">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" fill="#f472b6" opacity="0.7"/>
                                <circle cx="18" cy="6" r="1" fill="#38bdf8" opacity="0.8"/>
                            </svg>
                        </div>
                        <div className="absolute top-19 left-1/2 animate-pulse">
                            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                                <circle cx="16" cy="16" r="3" fill="#38bdf8" opacity="0.7"/>
                                <circle cx="8" cy="8" r="1.5" fill="#facc15" opacity="0.8"/>
                                <circle cx="24" cy="10" r="2" fill="#34d399" opacity="0.7"/>
                            </svg>
                        </div>
                        <div className="absolute bottom-24 right-1/3 animate-pulse">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" fill="#f472b6" opacity="0.7"/>
                                <circle cx="18" cy="6" r="1" fill="#38bdf8" opacity="0.8"/>
                            </svg>
                        </div>
                    </div>
                    
                    <h1 className="!font-montserrat text-gray-900 opacity-30 leading-4 drop-shadow-md font-extrabold uppercase text-2xl ">project Elite</h1>

                    <Heading className="!text-blue-700 font-extrabold drop-shadow-lg" size="h1">
                        Not Just Training. The <span className="!text-emerald-400 ">ELITE</span> Transformation.
                    </Heading>
<h2>
                    <Heading className="!text-gray-600" size="h4">
                        Campus Placement & Career Readiness Made Easy.
                    </Heading>
</h2>

                    <div className="flex gap-9 ">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold shadow">
                            100% Placement Support
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold shadow">
                            Proven Results
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold shadow">
                            Industry Experts
                        </span>
                    </div>


                    <button
                        type="button"
                        onClick={() => setOpen(p => !p)}
                        className="rounded-lg bg-gradient-to-r from-blue-500 to-emerald-400 text-white !w-full max-w-[30rem] py-3 font-semibold shadow-lg hover:scale-105 hover:from-blue-400 hover:to-emerald-300 transition-all duration-200"
                    >
                        <span className="inline-flex items-center gap-2">
                            Request a demo
                        </span>
                    </button>
                    {/* Animated arrow down for scroll hint */}
                    {/* <div className="flex justify-center mt-4">
                        <svg className="w-8 h-8 text-blue-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div> */}
                </div>
                <div className=" flex-1 flex justify-center h-[22rem] items-center relative">
                <img
                    src="/assets/hero.jpg"
                    alt="Hero"
                    width={"100%"}
                    className="object-cover rounded-2xl shadow-lg opacity-80"
                    style={{ width: "100%", height: "22rem", maxWidth: 500 }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  
                />
                </div>
            </div>

            {/* Key Highlights */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center rounded-xl bg-white drop-shadow-md py-8 px-4 gap-6 mb-12">
                {keyHighlights.map((highlight, idx) => (
                <div
                    key={highlight.title}
                    className={`flex flex-col flex-1 items-center justify-center px-4 ${
                    idx !== keyHighlights.length - 1 ? "md:border-r border-gray-200" : ""
                    }`}
                >
                    <Heading
                    size="h3"
                    className={`!font-bold ${
                        highlight.color === "yellow"
                        ? "!text-yellow-400"
                        : highlight.color === "blue"
                        ? "!text-blue-400"
                        : "!text-green-500"
                    }`}
                    >
                    {highlight.title}
                    </Heading>
                    <Heading size="h6" className="!text-gray-700">
                    {highlight.description}
                    </Heading>
                </div>
                ))}
            </div>
            </div>



            {/* request form modal */}
            <Modal
            centered
                        open={open}
            onCancel={() => setOpen(false)}
        footer={null}

      >
      <RequestForm showRquestModal={setOpen}/>
      </Modal>
            </>
    )
}


export default HomePage;


