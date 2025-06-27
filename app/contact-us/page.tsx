'use client';
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon,EnvelopeIcon,PhoneIcon,WhatsappLogoIcon, MapPinIcon } from "@phosphor-icons/react";

// export const metadata = {
//   title: 'Contact Us | Project ELITE',
//   description:
//     'Get in touch with Project ELITE for inquiries, training programs, and placement services. Reach us via email, phone, or WhatsApp.',
// };


export default function ContactUs() {
    return(
        <>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Project ELITE",
      "url": "https://yourdomain.com/contact-us",
      "email": "info@projectelite.in",
      "telephone": "+917566513585",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector R,392, Mahalakshmi Nagar",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "452010",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+917566513585",
          "contactType": "customer support",
          "availableLanguage": "English"
        }
      ],
      "sameAs": [
        "https://facebook.com/projectelite",
        "https://twitter.com/projectelite",
        "https://instagram.com/projectelite"
      ]
    })
  }}
/>

        <main
            className="mx-auto px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-t-3xl shadow-2xl border border-emerald-900 py-20 "
            id="contact-us"
            aria-labelledby="contact-heading"
        >
            <h1
                id="contact-heading"
                className="text-emerald-300 text-3xl md:text-5xl max-w-full font-extrabold  tracking-tight text-center"
            >
                Get in Touch
            </h1>
            <p className="text-lg text-gray-300 text-center mb-10 max-w-xl mx-auto">
                We’d love to hear from you! Reach out for inquiries, training, or placement services.
            </p>
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <section className="flex-1 w-full">
                    <div className="bg-emerald-950/70 rounded-2xl p-7 shadow-lg border border-emerald-800">
                        <ul className="space-y-6 text-gray-100 text-base">
                            <li className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-900/80 text-emerald-300">
                                    {/* Email Icon */}
                                <EnvelopeIcon className="w-5 h-5" />
                                </span>
                                <span>
                                    <span className="font-semibold text-emerald-400">Email:</span>{" "}
                                    <a
                                        href="mailto:info@projectelite.in"
                                        className="underline hover:text-emerald-300 transition-colors"
                                    >
                                        info@projectelite.in
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-900/80 text-emerald-300">
                                    {/* Phone Icon */}
                                    <PhoneIcon className="w-5 h-5" />
                                </span>
                                <span>
                                    <span className="font-semibold text-emerald-400">Phone:</span>{" "}
                                    <a
                                        href="tel:+917566513585"
                                        className="underline hover:text-emerald-300 transition-colors"
                                    >
                                        +91 75665 13585
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-900/80 text-emerald-300">
                                    {/* WhatsApp Icon */}
                                    <WhatsappLogoIcon className="w-5 h-5" />
                                </span>
                                <span>
                                    <span className="font-semibold text-emerald-400">WhatsApp:</span>{" "}
                                    <a
                                        href="https://wa.me/917566513585"
                                        className="underline hover:text-emerald-300 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-900/80 text-emerald-300">
                                    {/* Location Icon */}
                                   <MapPinIcon className="w-5 h-5" />
                                </span>
                                <span>
                                    <span className="font-semibold text-emerald-400">Location:</span>{" "}
                                    Sector R,392, Mahalakshmi Nagar, Indore, MP 452010
                                </span>
                            </li>
                        </ul>
                        <div className="flex gap-7 mt-8 justify-center">
                            <a
                                href="https://facebook.com/projectelite"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                {/* Facebook Icon */}
                               <FacebookLogoIcon className="w-7 h-7" color="white" viewBox="0 0 256 256"/>
                            </a>
                            <a
                                href="https://twitter.com/projectelite"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                {/* Twitter Icon */}
                             <TwitterLogoIcon className="w-7 h-7" color="white"  viewBox="0 0 256 256"/>
                            </a>
                            <a
                                href="https://instagram.com/projectelite"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                {/* Instagram Icon */}
                              <InstagramLogoIcon className="w-7 h-7" color="white" viewBox="0 0 256 256"/>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        </>
    )
}