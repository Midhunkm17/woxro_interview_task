"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Cube images array
const cubeImages = [
  [
    "/img1.jpg.png",
    "/img2.jpg.png",
    "/img1.jpg.png",
    "/img2.jpg.png",
    "/img1.jpg.png",
    "/img2.jpg.png",
  ],
  [
    "/img7.jpg.png",
    "/img8.jpg.png",
    "/img7.jpg.png",
    "/img8.jpg.png",
    "/img7.jpg.png",
    "/img8.jpg.png",
  ],
  [
    "/img13.jpg.png",
    "/img14.jpg.png",
    "/img13.jpg.png",
    "/img14.jpg.png",
    "/img13.jpg.png",
    "/img14.jpg.png",
  ],
  [
    "/img19.jpg.png",
    "/img20.jpg.png",
    "/img19.jpg.png",
    "/img20.jpg.png",
    "/img19.jpg.png",
    "/img20.jpg.png",
  ],
  [
    "/img25.jpg.png",
    "/img26.jpg.png",
    "/img25.jpg.png",
    "/img26.jpg.png",
    "/img25.jpg.png",
    "/img26.jpg.png",
  ],
  [
    "/img31.jpg.png",
    "/img32.jpg.png",
    "/img31.jpg.png",
    "/img32.jpg.png",
    "/img31.jpg.png",
    "/img32.jpg.png",
  ],
];

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const cubeRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    // zoomin&out trasition
    tl.fromTo(
      ".first-section",
      { scale: 1, opacity: 1, filter: "blur(0px)" },
      { scale: 1.2, opacity: 1, filter: "blur(10px)" }
    )
      .to(".first-section", { scale: 1.2, opacity: 0, filter: "blur(20px)" })
      .fromTo(
        ".second-section",
        { scale: 0.4, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)" },
        "<"
      );
    // Ensure cubes rotate on scroll
    cubeRefs.current.forEach((cube) => {
      gsap.to(cube, {
        rotationY: "+=360",
        rotationX: "+=360",
        duration: 4,
        ease: "linear",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="section-wrapper relative h-screen w-full overflow-hidden"
      >
        {/* First Section */}
        <div className="first-section absolute inset-0 flex flex-col justify-center items-center text-center px-4 h-screen">
          <img
            className="w-[156px] h-[96px] mt-10"
            src="/Group 1.png"
            alt="Logo"
          />
          <h1 className="text-[#FFE9D9] text-xl sm:text-3xl md:text-4xl lg:text-6xl w-[100%] sm:w-[700px] md:w-[900px] lg:w-[1057px] mt-14 font-serif">
            The First Media Company crafted For the Digital First generation
          </h1>
        </div>

        {/* Second Section */}
        <div className="second-section absolute inset-0 block lg:flex md:flex sm:flex justify-center items-center h-screen w-screen gap-2 lg:gap-40 mt-60 lg:mt-0 md:mt-0 sm:mt-0">
          {/* Left Side Cubes */}
          <div className="flex flex-row lg:flex-col md:flex-col sm:flex-col gap-32 lg:gap-28 ml-8 mb-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                ref={(el) => (cubeRefs.current[index] = el)}
                className={`cube block ${
                  index === 0 ? "lg:ml-12" : index === 2 ? "lg:ml-12" : "ml-0"
                } ${index === 1 && "hidden lg:block md:block sm:block"}`}
              >
                {cubeImages[index].map((image, i) => (
                  <div
                    key={i}
                    className={`face face-${i}`}
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>

          <div className="text-center max-w-xl">
            <h2 className="text-[#FFE9D9] text-lg lg:text-6xl font-semibold">
              Where innovation meets precision.
            </h2>
            <p className="text-[#85817f] text-sm lg:text-base md:text-base sm:text-base mt-4">
              Symphonia unites visionary thinkers, creative architects, and
              analytical experts, collaborating seamlessly to transform
              challenges into opportunities. Together, we deliver tailored
              solutions that drive impact and inspire growth.
            </p>
          </div>

          {/* Right Side Cubes */}
          <div className="flex flex-row lg:flex-col md:flex-col sm:flex-col gap-32 lg:gap-28 ml-8 mt-2">
            {[3, 4, 5].map((index) => (
              <div
                key={index}
                ref={(el) => (cubeRefs.current[index] = el)}
                className={`cube ${
                  index === 4
                    ? "lg:ml-16 hidden lg:block md:block sm:block"
                    : "ml-0"
                }`}
              >
                {cubeImages[index].map((image, i) => (
                  <div
                    key={i}
                    className={`face face-${i}`}
                    style={{ backgroundImage: `url('${image}')` }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center font-semibold bg-[#CDB9AB] h-screen">
        <h5 className="text-3xl text-[#331707] bg-transparent">
          Your next section goes here.
        </h5>
      </div>

      {/* Cube Styling */}
      <style jsx>{`
        .cube {
          position: relative;
          width: 100px;
          height: 100px;
          transform-style: preserve-3d;
        }

        .face {
          position: absolute;
          width: 100px;
          height: 100px;
          background-size: cover;
          background-position: center;
          border: 2px solid #fff;
        }

        .face-0 {
          transform: translateZ(50px);
        }
        .face-1 {
          transform: rotateY(180deg) translateZ(50px);
        }
        .face-2 {
          transform: rotateY(-90deg) translateZ(50px);
        }
        .face-3 {
          transform: rotateY(90deg) translateZ(50px);
        }
        .face-4 {
          transform: rotateX(90deg) translateZ(50px);
        }
        .face-5 {
          transform: rotateX(-90deg) translateZ(50px);
        }
      `}</style>
    </>
  );
}
