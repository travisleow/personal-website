"use client";

import React, { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { themeAtom } from "@/lib/atoms";
import { useAtom } from "jotai";

type Theme = "light" | "dark";

function ThemeToggler() {
    const [theme, setTheme] = useAtom(themeAtom);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem("theme") as Theme | null;
        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <button
            className="flex items-center justify-center fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    );
}

export default ThemeToggler;
