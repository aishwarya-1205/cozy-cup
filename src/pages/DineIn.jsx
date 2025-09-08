import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const DineIn = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionsRef = useRef([]);

  const imageArray = [
    "https://i.pinimg.com/736x/e4/6a/e4/e46ae47cec79f93a44709b07454e4f4e.jpg",
    "https://i.pinimg.com/1200x/f0/45/63/f0456360847ccb1ff8bb1d72b7714c1a.jpg",
    "https://i.pinimg.com/1200x/01/24/e1/0124e145a09d0795f5a0e522dcc775b1.jpg",
    "https://i.pinimg.com/736x/39/35/d7/3935d7a96e33f58d5ff217963304ce52.jpg",
    "https://i.pinimg.com/1200x/8a/50/9e/8a509e80a255b25b54774a4437debf0e.jpg",
    "https://i.pinimg.com/1200x/7f/7c/0a/7f7c0a441577459d9a0a01ee28b59cc5.jpg",
    "https://i.pinimg.com/736x/71/dd/14/71dd147260cf9bcfbd02432fd441860c.jpg",
    "https://i.pinimg.com/736x/5c/7a/43/5c7a43138d9740941d0326a156551135.jpg",
    "https://i.pinimg.com/736x/85/ca/a7/85caa796e00f8eccc334c6cdd835e578.jpg",
    "https://i.pinimg.com/736x/4a/1c/4a/4a1c4a9755e4d3bdfcb45a1c3a58712f.jpg",
  ];

  const text =
    "Indulge in our expertly crafted cappuccino, where rich espresso meets velvety steamed milk in perfect harmony. This beloved Italian classic features a bold double shot of our premium espresso, crowned with thick, creamy microfoam that creates a luxurious texture with every sip.";

  useGSAP(() => {
    sectionsRef.current.forEach((sec, i) => {
      const img = sec.querySelector("img");

      // Different animation style for each image
      const animations = [
        { x: -200, opacity: 0 }, // slide from left
        { x: 200, opacity: 0 }, // slide from right
        { y: 200, opacity: 0 }, // slide up
        { y: -200, opacity: 0 }, // slide down
        { scale: 0.5, opacity: 0 }, // zoom in
        { scale: 1.5, opacity: 0 }, // zoom out
        { rotate: -45, opacity: 0 }, // rotate in
        { rotate: 45, opacity: 0 }, // rotate other way
        { filter: "blur(20px)", opacity: 0 }, // blur to clear
        { x: -200, rotate: -30, opacity: 0 }, // combo
      ];

      gsap.from(img, {
        ...animations[i % animations.length],
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  return (
    <div className="space-y-60 py-20">
      {imageArray.map((src, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* Image */}
          <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-xl">
            <img
              src={src}
              alt={`Coffee ${index + 1}`}
              className="w-full h-[60vh] object-cover rounded-2xl"
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 w-full">
            <h1 className="text-[8vw] lg:text-[3vw] font-bold uppercase mb-6 leading-tight">
              Cappuccino – The Perfect Balance
            </h1>
            <p className="lg:text-xl text-base leading-relaxed">{text}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DineIn;
