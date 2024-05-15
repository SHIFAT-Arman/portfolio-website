"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[5px] bg-fuchsia-600 origin-[0%] z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="bg-white lg:px-24">
        <div className="pt-14 from-fuchsia-100 bg-gradient-to-b overflow-hidden isolate relative rounded-3xl  ">
          <div
            className="ring-2 ring-indigo-50 shadow-fuchsia-400 shadow-xl bg-fuchsia-50 -skew-x-[30deg]  origin-top-right w-[200%] -mr-96 -z-10 right-2/4 top-0 bottom-0 absolute lg:-mr-96"
            aria-hidden="true"
          ></div>
          <div className="pt-32 pb-32 pl-6 pr-6 max-w-7xl ml-auto mr-auto lg:pl-8 lg:pr-8 ">
            <div className="max-w-2xl ml-auto mr-auto lg:grid lg:gap-x-8 lg:grid-rows-1 lg:grid-cols-1 lg:gap-y-6 lg:max-w-none lg:ml-0 lg:mr-0 ">
              <h1 className="text-gray-900 -tracking-wide font-bold text-4xl leading-10 max-w-2xl mt-20 lg:col-auto lg:text-6xl lg:leading-[1] ">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Hey there!",
                    1000,
                    "myself",
                    1000,
                    " Shifat Arman",
                    1000,
                  ]}
                  speed={40}
                  style={{ fontSize: "1em" }}
                  repeat={0}
                  preRenderFirstString={true}
                />
              </h1>
              <div className="max-w-xl mt-6 lg:row-start-1 lg:col-end-1 lg:mt-0 ">
                <p className="text-gray-600 leading-8 text-lg m-0">
                  currently doing my BSc in Computer Science and Engineering. I
                  am a passionate programmer and a web developer. I intend to
                  build my career around Data Science and Machine Learning.
                </p>
                <div className="gap-x-6 items-center flex mt-10">
                  <a
                    href="#footer"
                    className="shadow-sm text-white font-semibold text-sm py-[0.625rem] px-[0.875rem] bg-fuchsia-800 rounded-md decoration-auto"
                  >
                    Contact
                  </a>
                  <a
                    href="#pr"
                    className="text-gray-900 leading-6 font-semibold text-sm decoration-inherit"
                  >
                    See projects <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <Image
                src="/bigData.svg"
                alt="mans image"
                className="object-cover rounded-2xl max-w-sm w-5/6 aspect-[6/6] h-auto block align-middle lg:mx-14 lg:row-end-2 lg:row-span-2 lg:max-w-none"
                height={50}
                width={50}
              />
            </div>
          </div>
          <div className="from-white bg-gradient-to-t h-24 -z-10 bottom-0 inset-x-0 absolute md:h-32"></div>
        </div>
      </div>
    </>
  );
}
