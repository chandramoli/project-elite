// components/AboutSection.tsx

export const metadata = {
  title: 'About Us | Project ELITE',
  description:
    'Learn about Project ELITE’s mission to empower college students for campus placements through holistic training in aptitude, soft skills, technical prep, and interview readiness.',
};


export default function About() {
    return (
        <>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Project ELITE",
      "url": "https://yourdomain.com/about",
      "description": "Project ELITE empowers college students for placement success with training in aptitude, interviews, communication, and technical skills.",
      "sameAs": [
        "https://www.linkedin.com/company/project-elite", // or your socials
        "https://www.instagram.com/projectelite"
      ]
    })
  }}
/>

        <main
            id="about"
            className="relative min-h-[70vh] py-6 md:px-24 flex flex-col items-center transition-colors"
        >
            <header className="mb-14 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 mb-4">
                    About Us
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Empowering students for campus placements and beyond.
                </p>
            </header>

            <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
                <section className="flex-1 p-10 mb-8 md:mb-0 bg-card transition-colors bg-white rounded-2xl shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        Project ELITE is dedicated to equipping college students with the skills required
                        to ace campus placements and thrive in their careers.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
                            Employability
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
                            Logical Reasoning
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
                            Interview Skills
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
                            Technical Aptitude
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
                            English Communication
                        </span>
                    </div>
                </section>

                <section className="flex-1 p-10 bg-white rounded-2xl shadow-md border border-gray-200 bg-card transition-colors">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                        Why Choose Us
                    </h2>
                    <ul className="space-y-5 text-gray-700 text-lg">
                        {[
                            'Proven Track Record',
                            'Industry-Relevant Content',
                            'Expert Trainers',
                            'Holistic Approach: Aptitude + Soft Skills + Tech + Interview Prep',
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <span className="text-blue-700 text-2xl">✔</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
        </>
    );
}
