import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index , title , icon }) =>{
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
      variants={fadeIn("right", "spring",0.5*index,0.75)}
      className="w-full green-pink-gradient p-[1px ] rounded-[20px] shadow-card "
      >
        <div options={{max:45 , scale:1, speed:450 }}
        className="bg-tertiary rounded-[20x] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col   "
        >
          <img src={icon} alt={title } className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
      {title}
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <motion.p
          className="mt-2 mb-2 text-secondary text-[17px] max-w-3xl  leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          "Highly skilled MERN stack developer with expertise in crafting
          immersive 3D experiences, leveraging cutting-edge technologies like
          Three.js, React Three Fiber, and GSAP. Proficient in blending stunning
          visuals with seamless interactions, I bring designs to life using
          Blender. With a strong foundation in MongoDB, Express, React, and
          Node.js, I develop scalable, efficient, and visually stunning web
          applications. My unique blend of technical expertise and creative
          vision enables me to deliver innovative solutions that push the
          boundaries of web development."
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10 ">

         {services.map((services,index)=>(<ServiceCard key={services.title } index={index} {...services}  />))}

        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about")  ;
