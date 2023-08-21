import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";

const PreLoader = () => {
    const { progress } = useProgress();
    const [shouldShowPreloader, setShouldShowPreloader] = useState(true);

    useEffect(() => {
        // Setting a delay to remove the preloader when progress hits 100
        if (progress === 100) {
            setTimeout(() => {
                setShouldShowPreloader(false);
            }, 1000);
        }
    }, [progress]);

    return (
        <AnimatePresence>
            {shouldShowPreloader && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center flex-col bg-gray-900 z-[9999]"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -1000 }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <p className="text-2xl text-white font-medium">
                        {progress.toFixed(2)}%
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PreLoader;
