import React from "react";

export const metadata = {
  title: 'Courses & Programs | Project ELITE',
  description: 'Explore industry-ready courses and training programs including aptitude, reasoning, resume building, and mock interviews for placement success.',
};

type Course = {
    name: string;
    features?: React.ReactNode;
};

const COURSES: Course[] = [
    { name: "Campus Placement Training" },
    { name: "Quantitative Aptitude" },
    { name: "Logical Reasoning" },
    {
        name: "Technical Tests",
        features: <span className="text-gray-500">(Branch-specific)</span>,
    },
    {
        name: "Interview Skills",
        features: <span className="text-gray-500">(HR + Tech)</span>,
    },
    { name: "Custom Modules" },
    { name: "Resume Building Workshops" },
    { name: "Group Discussion Bootcamps" },
    {
        name: "Mock Interviews",
        features: <span className="text-gray-500">(AI + Live)</span>,
    },
    {
        name: "Company-Specific Prep",
        features: (
            <span className="text-gray-500">
                (e.g., TCS, Infosys, Capgemini)
            </span>
        ),
    },
];

const FEATURES = [
    "Live & Recorded Sessions",
    "Doubt-Clearing Forums",
    "Regular Practice Tests",
    "Personalized Feedback",
];



const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Project ELITE Courses",
  "itemListElement": COURSES.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Course",
      "name": course,
      "description": 'Courses and training programs offered by Project ELITE to prepare students for campus placements.s',
      "provider": {
        "@type": "Organization",
        "name": "Project ELITE",
        "url": "https://projectelite.in"
      },
      // Optional: add `hasCourseInstance` if you have course sessions here
    }
  })),
};



const CoursesPage = () => {
    return (
        <>
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
        <main id="courses" className=" py-6 px-4">
            <header className="mb-14 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 mb-4">
                Courses & Programs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Unlock your potential with our comprehensive, industry-aligned training modules and personalized support.
            </p>
            </header>

            <section className="mb-14 grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Flagship Training Programs</h2>
                <ul className="space-y-3">
                {COURSES.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base leading-relaxed">
                    <span className="mt-1 w-2 h-2 bg-blue-700 rounded-full flex-shrink-0" />
                    <div className="flex items-center gap-1">
                    <span className="text-gray-900">{item.name}</span>
                    <span className="text-gray-500">{item?.features}</span>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Course Features</h2>
                <ul className="space-y-3">
                {FEATURES.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base leading-relaxed">
                    <span className="mt-1 w-2 h-2 bg-blue-700 rounded-full flex-shrink-0" />
                    <span className="text-gray-900">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-start md:gap-12 gap-8">
                <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                    For Colleges
                    <span className="text-base font-medium text-gray-600">(B2B)</span>
                </h2>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Partner with Project ELITE</h3>
                <p className="mb-5 text-gray-700">
                    Empower your students with industry-ready placement training tailored to your campus needs.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-700 rounded-full" />
                    <span className="text-gray-800">Customizable training modules</span>
                    </li>
                    <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-700 rounded-full" />
                    <span className="text-gray-800">Student performance analytics</span>
                    </li>
                    <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-700 rounded-full" />
                    <span className="text-gray-800">Dedicated success manager</span>
                    </li>
                </ul>
                </div>
                <div className="flex-1">
                <h4 className="text-lg font-semibold mb-4 text-blue-700">How We Work?</h4>
                <ol className="flex flex-col gap-4">
                      <li className="flex items-center gap-3">
                    <span className="h-6 border-l-2 border-blue-500 mr-1" />
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                    <span className="font-medium text-gray-900">Pre-assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                    <span className="h-6 border-l-2 border-blue-500 mr-1" />
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                    <span className="font-medium text-gray-900">Training Plan</span>
                    </li>
                    <li className="flex items-center gap-3">
                    <span className="h-6 border-l-2 border-blue-500 mr-1" />
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                    <span className="font-medium text-gray-900">Execution</span>
                    </li>
                    <li className="flex items-center gap-3">
                    <span className="h-6 border-l-2 border-blue-500 mr-1" />
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
                    <span className="font-medium text-gray-900">Mock Tests</span>
                    </li>
                    <li className="flex items-center gap-3">
                    <span className="h-6 border-l-2 border-blue-500 mr-1" />
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</span>
                    <span className="font-medium text-gray-900">Placement Success</span>
                    </li>
                </ol>
                </div>
            </div>
            </section>
        </main>
        </>
    );
};

export default CoursesPage;