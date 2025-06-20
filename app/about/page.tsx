// components/AboutSection.tsx

export default function About() {
    return (
        <section
            id="about"
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-8 px-4 md:px-12 rounded-t-xl shadow-lg "
        >
            <div className="mb-8 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
                About Us
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Empowering students for campus placements and beyond.
            </p>
            </div>

            <div className="mb-10">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-3">
                Project ELITE - Our Mission
            </h3>
            <p className="text-gray-200 leading-relaxed">
                Project ELITE is dedicated to equipping college students with the skills required
                to ace campus placements and thrive in their careers. <span className="font-semibold text-emerald-300">ELITE</span> stands for <span className="font-semibold">Employability, Logical Reasoning, Interview Skills, Technical Aptitude,</span> and <span className="font-semibold">English Communication</span>.
            </p>
            </div>

            <div className="mb-10">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-3">
                Why Choose Us
            </h3>
            <ul className="space-y-3 text-gray-100">
                <li className="flex items-center gap-2">
                <span className="text-emerald-400 text-xl">✔</span>
                Proven Track Record
                </li>
                <li className="flex items-center gap-2">
                <span className="text-emerald-400 text-xl">✔</span>
                Industry-Relevant Content
                </li>
                <li className="flex items-center gap-2">
                <span className="text-emerald-400 text-xl">✔</span>
                Expert Trainers
                </li>
                <li className="flex items-center gap-2">
                <span className="text-emerald-400 text-xl">✔</span>
                Holistic Approach: Aptitude + Soft Skills + Tech + Interview Prep
                </li>
            </ul>
            </div>

            <div className="">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-3">
                Contact Us
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <ul className="space-y-3 text-gray-100">
                    <li>
                    <span className="font-semibold text-emerald-300">Email:</span>{" "}
                    <a href="mailto:info@projectelite.com" className="underline hover:text-emerald-400">info@projectelite.com</a>
                    </li>
                    <li>
                    <span className="font-semibold text-emerald-300">Phone:</span>{" "}
                    <a href="tel:+1234567890" className="underline hover:text-emerald-400">+1 234 567 890</a>
                    </li>
                    <li>
                    <span className="font-semibold text-emerald-300">WhatsApp:</span>{" "}
                    <a href="https://wa.me/1234567890" className="underline hover:text-emerald-400">Chat on WhatsApp</a>
                    </li>
                    <li>
                    <span className="font-semibold text-emerald-300">Location:</span>{" "}
                    123 College Road, City, Country
                    </li>
                    <li className="flex gap-4 mt-2">
                    <a href="https://facebook.com/projectelite" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg className="w-6 h-6 text-gray-300 hover:text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"></path></svg>
                    </a>
                    <a href="https://twitter.com/projectelite" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg className="w-6 h-6 text-gray-300 hover:text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.99 4.07 7.13 1.64 4.15c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.69 2.11 2.92 3.97 2.95A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"></path></svg>
                    </a>
                    <a href="https://instagram.com/projectelite" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg className="w-6 h-6 text-gray-300 hover:text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.974.974 1.252 2.241 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.241 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.974-1.252-2.241-1.314-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608C4.521 2.573 5.788 2.295 7.154 2.233 8.42 2.175 8.8 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395 2.697 2.376 2.414 3.488 2.355 4.769.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg>
                    </a>
                    </li>
                </ul>
                </div>
                <div>
               
             
                </div>
            </div>
            </div>
        </section>
    );
}
