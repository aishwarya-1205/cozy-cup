import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TakeoutCard from "../components/takeout/TakeoutCard";

const Takeout = () => {
  const takeouts = [
    {
      image1:
        "https://i.pinimg.com/1200x/7b/35/af/7b35af4e84a1d65636a01643c710f297.jpg",
      image2:
        "https://i.pinimg.com/736x/60/9f/bd/609fbd83d22abffdf48c86cdd85c4731.jpg",
    },
    {
      image1:
        "https://i.pinimg.com/736x/4e/13/20/4e13200c3419ea2b63dd0ff21905dc05.jpg",
      image2:
        "https://i.pinimg.com/736x/7f/ff/61/7fff61d8815c1399deb763106a6c1d75.jpg",
    },
    {
      image1:
        "https://i.pinimg.com/736x/81/1a/7c/811a7c5f7bd1386de9ad10555c2c419d.jpg",
      image2:
        "https://i.pinimg.com/1200x/b0/c3/73/b0c373e098cc618420a8769b46128402.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 20%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className="lg:p-4 p-2 mb-[100vh]">
      <div className=" pt-[45vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">
          Takeout
        </h2>
      </div>
      <div className="-lg:mt-20 lol">
        {takeouts.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
            >
              <TakeoutCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Takeout;
