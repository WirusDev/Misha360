import * as React from "react";

export default function Footer({ className }: { className?: string }) {
  const rootClasses = `bg-black text-white p-4 fixed bottom-0 w-full ${className}`;
  return (
    <footer className={rootClasses}>
      <h1 className='text-2xl'>Footer</h1>
    </footer>
  );
}
