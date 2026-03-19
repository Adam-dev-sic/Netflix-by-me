"use client";
import React, { useState, useRef, useEffect } from "react";

const items = [
  {
    title: "What is Netflix?",
    body: `
    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
  },
  {
    title: "How much does Netflix cost?",
    body: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 3.99 to USD 9.99/month.",
  },
  {
    title: "Where can I watch?",
    body: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    title: "How do I cancel?",
    body: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    title: "What can I watch on Netflix?",
    body: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    title: "Is Netflix good for kids?",
    body: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
  // ... add more
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <ul className="mt-6 space-y-2">
      {items.map((it, i) => (
        <li key={i} className="bg-[#2d2d2d]  rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            className="w-full flex items-center hover:cursor-pointer hover:bg-[#414141] justify-between px-6 py-4 text-left"
          >
            <span className="text-2xl font-medium text-white">{it.title}</span>
            {/* Icon rotates when open */}
            <div
              className={`w-10 h-10 flex items-center justify-center transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : "rotate-0"
              }`}
            >
              {/* plus icon */}
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* Animated panel: using max-h + scale-y for a smooth slide */}
          <div
            className={`px-6 overflow-hidden bg-[#2d2d2d]  text-white transition-all duration-300 transform origin-top
              ${openIndex === i ? "max-h-96 scale-y-100 opacity-100 py-4" : "max-h-0 scale-y-0 opacity-0 py-0"}`}
          >
            <p className="font-medium text-2xl leading-relaxed">{it.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
