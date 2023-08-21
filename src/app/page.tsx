"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { isLoadedAtom } from "@/lib/atoms";

import Divider from "@/components/Divider";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import PreLoader from "@/components/PreLoader";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
    const [isLoaded] = useAtom(isLoadedAtom);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <main className={`flex flex-col items-center px-4`}>
                {/* <PreLoader /> */}
                <Header />
                <Intro />
                <Divider />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Footer />
            </main>
        </motion.div>
    );
}
