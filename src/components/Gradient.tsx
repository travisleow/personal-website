import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function Gradient({ children }: SectionHeadingProps) {
  return (
    <span className="bg-gradient-to-r from-[#8ab4f8] to-[#c1a8e2] text-transparent bg-clip-text">
      {children}
    </span>
  );
}
