import type { PropsWithChildren } from "react";

interface SectionHeadingProps extends PropsWithChildren {}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2 -ml-8 pl-8 relative cursor-default">
      {children}
      {/* Animated underline on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </h2>
  );
}
