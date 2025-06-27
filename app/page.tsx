
import { Metadata } from "next";
import About from "./about/page";
import Courses from "./courses/page";
import HomePage from "./home/page";
import TrainersPage from "./trainers/page";


export const metadata: Metadata = {
  title: "ProjectElite – Portfolio & Courses by [Your Name]",
  description: "ProjectElite is the personal portfolio and course platform by [Your Name], showcasing web development projects, expert trainers, and professional growth.",
  keywords: ["ProjectElite", "projectelite.in", "web development", "portfolio", "trainers", "courses"],
  authors: [{ name: "[]" }],
  openGraph: {
    title: "ProjectElite – Portfolio & Courses",
    description: "Showcasing skills, trainers, and development courses by Project Elite.",
    url: "https://projectelite.in",
    siteName: "ProjectElite",
    images: [
      {
        url: "/assets/logo.jpeg", // add this file in your public/ directory
        width: 1200,
        height: 630,
        alt: "ProjectElite website preview",
      },
    ],
    type: "website",
  },
};


const Main =()=>{

    return (
 <>
 <div className="flex flex-col items-center w-full bg-gradient-to-b snap-y snap-mandatory overflow-y-scroll from-white to-blue-50">
            {/* Hero Section */}
            <div className="w-full  snap-start h-full max-w-6xl px-6 mb-12">
            <HomePage/>
            </div>

 {/* trainers */}
            <div className="w-full snap-start h-full max-w-6xl px-6 mb-12">
            <TrainersPage />
            </div>



            {/* courses */}
            <div className="w-full snap-start h-full max-w-6xl px-6 mb-12">
            <Courses />
            </div>

            {/* About Section */}
            <div className="w-full snap-start h-full ">
            <About />
            </div>
        </div>
        </>
    );
}

export default Main;