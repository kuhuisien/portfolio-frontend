import { motion } from "framer-motion";
import { useMemo, useContext } from "react";
import { ThemeContext } from "../common/contexts/ThemeContext";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const yearsOfExperience = useMemo(() => {
    // start at 1st Sep 2019
    const startDate = new Date(2019, 8, 1);
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;

    // convert time difference to years
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
  }, []);

  return (
    <div className="pt-12 lg:py-28 px-6 flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl space-y-6">
        <motion.h1
          className="text-4xl font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, my name is Huisien Ku.
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          I am a full-stack web developer and React specialist, with{" "}
          {yearsOfExperience} years of working experience.
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
        >
          Feel free to take a look at my projects.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
