import React from "react";

function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; 2023 Travis Leow. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> Built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion and Three.js
            </p>
        </footer>
    );
}

export default Footer;
