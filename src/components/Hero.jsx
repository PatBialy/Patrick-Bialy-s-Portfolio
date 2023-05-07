import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-500" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-500 to-blue-500 to-transparent" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-grey-400 font-bold text-4xl`}
          >
            Hi, I'm{" "}
            <span
              className=" font-extrabold cursor-pointer"
              style={{
                backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Patrick
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 capitalize`}>
            A Full-Stack Software Engineer,&nbsp;
            <br className="sm:block hidden" />
            With Proficiency in front-end and back-end development.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
