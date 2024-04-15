import * as React from "react";

export default function Header({ className }: { className?: string }) {
  const rootClasses = `text-white bg-black p-4 ${className}`;
  return (
    <header className={rootClasses}>
      <h1 className='text-2xl'>Header</h1>
    </header>
  );
}
