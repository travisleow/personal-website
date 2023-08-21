import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After enrolling in Singapore Polytechnic's <span className="font-medium">Information Technology</span> Course{" "}
                , I decided to
                pursue my passion for programming. Since I was 8 years old, I've been intrigued and interested in computers.
                I enrolled in a coding
                bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript and MySQL. I am always
                looking to learn new technologies. I am currently studying <span className="font-medium">second year</span> in Singapore Polytechnic {" "}
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy
                playing video games, watching movies, and playing with my balisong. I
                also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am
                currently learning about{" "}
                <span className="font-medium">graphic design</span>.
            </p>
        </motion.section>
    );
}

export default About;
