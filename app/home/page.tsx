'use client'
import Heading from "@/modules/components/Heading"
import Head from "next/head";
import { Form, Input, Button, Modal } from "antd";
import React from "react";
import RequestForm from "@/modules/home/request-form";

const keyHighlights = [
    {title: "30,000+", description: "Students Trained",color:'yellow'},
    {title: "7+", description: "Years of Experience", color:'blue'},
    {title: "100+", description: "College Partnerships",},
]



const HomePage =() =>{
    const [open, setOpen] = React.useState(false);
    return(
        <>
          <div id="home" className=" h-full flex flex-col justify-center items-center pt-14">
            <div className="relative flex flex-col md:flex-row items-center  h-full justify-between w-full max-w-6xl px-6 py-16 gap-10">
                <div className="flex-1 h-full flex flex-col gap-6 z-10">
                <Heading className="!text-blue-900 font-extrabold" size="h1">
                    Not Just Training. The ELITE Transformation.
                </Heading>
                <Heading className="!text-blue-700" size="h4">
                    Campus Placement & Career Readiness Made Easy.
                </Heading>
                <button
                    type="button"
                    onClick={() =>setOpen(p=>!p) }
                    className="rounded-lg bg-blue-500 text-white px-6 py-3 font-semibold shadow hover:bg-blue-400 transition"
                >
                    Request a demo
                </button>
                </div>
                <div className=" flex-1 flex justify-center h-[22rem] items-center relative">
                <img
                    src="/assets/hero.jpg"
                    alt="Hero"
                    width={"100%"}
                    className="object-cover rounded-2xl shadow-lg opacity-80"
                    style={{ width: "100%", height: "22rem", maxWidth: 400 }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  
                />
                </div>
            </div>

            {/* Key Highlights */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center bgwhite rounded-xl bg-white border shadow-md py-8 px-4 gap-6 mb-12">
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


