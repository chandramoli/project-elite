
import { Metadata } from "next";
import About from "./about/page";
import Courses from "./courses/page";
import HomePage from "./home/page";
import TrainersPage from "./trainers/page";


export const metadata: Metadata = {
  title: "ProjectElite – Expert Trainers & Courses",
  description: "ProjectElite is an agency providing expert trainers for professional training and development. Explore our portfolio and training solutions.",
  keywords: [
    "ProjectElite",
    "projectelite.in",
    "web development",
    "training agency",
    "expert trainers",
    "courses",
    "professional development"
  ],
  openGraph: {
    title: "ProjectElite – Expert Trainers & Courses",
    description: "Agency offering expert trainers and professional development courses. Explore our portfolio and training solutions.",
    url: "https://projectelite.in",
    siteName: "Projectelite",
    images: [
      {
        url: "/assets/logo.jpeg",
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