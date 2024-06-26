import React from "react";

type sectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: sectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mn-8 text-center">
      {children}
    </h2>
  );
}
