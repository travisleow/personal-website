"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsYoutube } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import ComputersCanvas from "@/components/canvas/Computer";
import { useSectionInView } from "@/hooks/useSectionInView";
import {
    activeSectionAtom,
    timeOfLastClickAtom,
    computerLoadedAtom,
    themeAtom
} from "@/lib/atoms";
import { useAtom } from "jotai";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const [, setActiveSection] = useAtom(activeSectionAtom);
    const [, setTimeOfLastClick] = useAtom(timeOfLastClickAtom);
    const [theme] = useAtom(themeAtom);
    const [computerLoaded] = useAtom(computerLoadedAtom);

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    duration: 0.2,
                }}
                className="h-[25rem]"
            >
                <ComputersCanvas />
            </motion.div>

            {computerLoaded && (
                <>
                    
                    <motion.h1
                        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <motion.span
                            className="font-bold"
                            initial={{
                                y: 10,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                opacity: 0.6,
                                delay: 1,
                            }}
                        >
                            Hello, I&apos;m <span className={theme === "light" ? "text-gradient-light" : "text-gradient-dark"}>Travis</span>.
                        </motion.span>{" "}
                        {"I'm a full-stack developer currently pursuing a Diploma in Information Technology. I enjoy building sites & apps. My focus is React (Next.js)."
                            .split(" ")
                            .map((word, index) => {
                                return (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            y: 10,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                        }}
                                        className="text-muted inline-block mr-1"
                                        transition={{
                                            opacity: 0.6,
                                            delay: 1.2 + index * 0.05,
                                        }}
                                    >
                                        <>{word} </>
                                    </motion.span>
                                );
                            })}
                        {/* I'm a <span className="font-bold">full-stack developer</span>{" "}
                    currently pursuing a Diploma in{" "}
                    <span className="font-bold">Information Technology</span>. I
                    enjoy building <span className="italic">sites & apps</span>. My
                    focus is <span className="underline">React (Next.js)</span>. */}
                    </motion.h1>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.1,
                        }}
                    >
                        <Link
                            href="#contact"
                            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-black/30"
                            onClick={() => {
                                setActiveSection("Contact");
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                            Contact me here{" "}
                            <BsArrowRight className="opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition" />
                        </Link>
                        <a
                            href="/CV.pdf"
                            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10"
                            target="_blank"
                        >
                            Download CV{" "}
                            <HiDownload className="opacity-80 group-hover:translate-y-1 hover:opacity-100 transition" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/travis-leow/"
                            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <BsLinkedin />
                        </a>
                        <a
                            href="https://github.com/travisleow"
                            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60"
                            target="_blank"
                            aria-label="Github"
                        >
                            <FaGithubSquare />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCmOvJ2zEs92kqjCg4ajqbpw"
                            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <BsYoutube />
                        </a>
                    </motion.div>
                </>
            )}
        </section>
    );
}
