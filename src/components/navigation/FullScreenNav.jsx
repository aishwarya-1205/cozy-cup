import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();

    // Set initial states
    tl.set(".fullscreennav", {
      display: "flex",
      visibility: "visible",
    });

    tl.set(".stairing", {
      height: "0%",
    });

    tl.set(".link", {
      opacity: 0,
      rotateX: 90,
    });

    tl.set(".navlink", {
      opacity: 0,
    });

    // Animate stairing effect
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      duration: 0.8,
      ease: "power2.out",
      stagger: {
        amount: 0.3,
        from: "center",
      },
    });

    // Animate links
    tl.to(
      ".link",
      {
        opacity: 1,
        rotateX: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.4,
          from: "center",
        },
      },
      "-=0.4"
    );

    // Show nav controls
    tl.to(
      ".navlink",
      {
        opacity: 1,
        duration: 0.3,
      },
      "-=0.5"
    );
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();

    // Hide links
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      duration: 0.4,
      stagger: {
        amount: 0.2,
        from: "center",
      },
    });

    // Hide nav controls
    tl.to(
      ".navlink",
      {
        opacity: 0,
        duration: 0.2,
      },
      "-=0.3"
    );

    // Reverse stairing
    tl.to(
      ".stairing",
      {
        height: "0%",
        duration: 0.6,
        ease: "power2.in",
        stagger: {
          amount: 0.3,
          from: "center",
        },
      },
      "-=0.2"
    );

    // Hide completely
    tl.set(".fullscreennav", {
      display: "none",
      visibility: "hidden",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav fixed inset-0 text-white h-screen w-screen z-50 flex-col justify-center"
      style={{
        display: "none",
        visibility: "hidden",
      }}
    >
      {/* Background stairing effect */}
      <div className="absolute inset-0 h-full w-full">
        <div className="h-full w-full flex">
          <div
            className="stairing w-1/5 bg-black"
            style={{ height: "0%" }}
          ></div>
          <div
            className="stairing w-1/5 bg-black"
            style={{ height: "0%" }}
          ></div>
          <div
            className="stairing w-1/5 bg-black"
            style={{ height: "0%" }}
          ></div>
          <div
            className="stairing w-1/5 bg-black"
            style={{ height: "0%" }}
          ></div>
          <div
            className="stairing w-1/5 bg-black"
            style={{ height: "0%" }}
          ></div>
        </div>
      </div>

      {/* Navigation content */}
      <div ref={fullNavLinksRef} className="relative z-10 h-full flex flex-col">
        {/* Header with close button */}
        <div
          className="navlink absolute top-6 right-6 lg:top-10 lg:right-10 z-[100] opacity-0"
          style={{ opacity: 0 }}
        >
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-12 h-20 w-20 lg:w-36 relative cursor-pointer hover:opacity-60 transition-opacity"
          >
            <div className="lg:h-44 h-28 lg:w-1 w-2 -rotate-45 origin-top absolute bg-[#C3732A]"></div>
            <div className="lg:h-44 h-28 lg:w-1 w-2 right-0 rotate-45 origin-top absolute bg-[#C3732A]"></div>
          </div>
        </div>

        {/* Navigation links - Centered */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 lg:px-8">
          <div className="w-full max-w-6xl">
            {/* Dine In */}
            <div
              className="link origin-top relative border-t border-white overflow-hidden group"
              style={{ opacity: 0, transform: "rotateX(90deg)" }}
            >
              <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:py-6 py-4 uppercase transition-colors duration-300 group-hover:text-[#C3732A]">
                Dine In
              </h1>
              <div className="moveLink absolute inset-0 text-white flex items-center justify-center bg-[#C3732A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                <div className="moveX flex items-center whitespace-nowrap">
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Visit Now ✧
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover mr-8"
                    src="https://i.pinimg.com/1200x/80/bb/27/80bb2784012b961077a3961c2258344f.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Visit Now ✧
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover"
                    src="https://i.pinimg.com/1200x/58/0c/12/580c12ddfa883769cab5b24e81cdbab7.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Visit Now ✧
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover mr-8"
                    src="https://i.pinimg.com/1200x/80/bb/27/80bb2784012b961077a3961c2258344f.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Visit Now ✧
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover"
                    src="https://i.pinimg.com/1200x/58/0c/12/580c12ddfa883769cab5b24e81cdbab7.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Takeout */}
            <div
              className="link origin-top relative border-t border-white overflow-hidden group"
              style={{ opacity: 0, transform: "rotateX(90deg)" }}
            >
              <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:py-6 py-4 uppercase transition-colors duration-300 group-hover:text-[#C3732A]">
                Takeout
              </h1>
              <div className="moveLink absolute inset-0 text-white flex items-center justify-center bg-[#C3732A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                <div className="moveX flex items-center whitespace-nowrap">
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Order Now ♡
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover mr-8"
                    src="https://i.pinimg.com/1200x/08/cf/f5/08cff589b0950cfcc9c1568b1157e604.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Order Now ♡
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover"
                    src="https://i.pinimg.com/1200x/bc/6f/ca/bc6fca611e048872e196277e7a53c1a4.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Order Now ♡
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover mr-8"
                    src="https://i.pinimg.com/1200x/08/cf/f5/08cff589b0950cfcc9c1568b1157e604.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Order Now ♡
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover"
                    src="https://i.pinimg.com/1200x/bc/6f/ca/bc6fca611e048872e196277e7a53c1a4.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* About */}
            <div
              className="link origin-top relative border-t border-white overflow-hidden group"
              style={{ opacity: 0, transform: "rotateX(90deg)" }}
            >
              <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:py-6 py-4 uppercase transition-colors duration-300 group-hover:text-[#C3732A]">
                About
              </h1>
              <div className="moveLink absolute inset-0 text-white flex items-center justify-center bg-[#C3732A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                <div className="moveX flex items-center whitespace-nowrap">
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Know More ☕︎
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover mr-8"
                    src="https://i.pinimg.com/1200x/b2/83/07/b28307fcc3343ecb0d1d41879f0eea79.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Know More ☕︎
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover"
                    src="https://i.pinimg.com/736x/79/1d/68/791d68f4d55875d92d30c6f1eea88f2a.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Know More ☕︎
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover mr-8"
                    src="https://i.pinimg.com/1200x/b2/83/07/b28307fcc3343ecb0d1d41879f0eea79.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    Know More ☕︎
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover"
                    src="https://i.pinimg.com/736x/79/1d/68/791d68f4d55875d92d30c6f1eea88f2a.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div
              className="link origin-top relative border-t border-b border-white overflow-hidden group"
              style={{ opacity: 0, transform: "rotateX(90deg)" }}
            >
              <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:py-6 py-4 uppercase transition-colors duration-300 group-hover:text-[#C3732A]">
                Contact Us
              </h1>
              <div className="moveLink absolute inset-0 text-white flex items-center justify-center bg-[#C3732A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                <div className="moveX flex items-center whitespace-nowrap">
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    See You ( ˃ᴗ˂ )
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover mr-8"
                    src="https://i.pinimg.com/736x/e8/fa/9f/e8fa9fba2e7e43d300409ed7bc965e7c.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    See You ( ˃ᴗ˂ )
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover"
                    src="https://i.pinimg.com/1200x/3c/cd/57/3ccd57f61782406c95b8cb2cebaf0068.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    See You ( ˃ᴗ˂ )
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover mr-8"
                    src="https://i.pinimg.com/736x/e8/fa/9f/e8fa9fba2e7e43d300409ed7bc965e7c.jpg"
                    alt=""
                  />
                  <h2 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] uppercase mr-8">
                    See You ( ˃ᴗ˂ )
                  </h2>
                  <img
                    className="lg:h-36 h-14 rounded-full lg:w-96 w-32 object-cover"
                    src="https://i.pinimg.com/1200x/3c/cd/57/3ccd57f61782406c95b8cb2cebaf0068.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
