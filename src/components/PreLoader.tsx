import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { computerLoadedAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { Progress } from "./Progress";

const PreLoader = () => {
    const { progress } = useProgress();
    const [computerLoaded, setComputerLoaded] = useAtom(computerLoadedAtom);

    useEffect(() => {
        // Setting a delay to remove the preloader when progress hits 100
        if (progress === 100) {
            setTimeout(() => {
                setComputerLoaded(true);
            }, 1300);
        }
    }, [progress]);

    return (
        <AnimatePresence>
            {!computerLoaded && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center flex-col bg-gray-900 z-[9999]"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -1000 }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    {/* <Progress value={progress} /> */}
                    <motion.p
                        className="text-white text-4xl mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.5,
                        }}
                    >
                        {progress}%
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PreLoader;
