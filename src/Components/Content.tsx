import * as React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
export default function Content({ className }: { className?: string }) {
  const rootClasses = `bg-gray-500  ${className}`;
  return (
    <main className={rootClasses}>
      <div className='gap-4 grid grid-cols-2'>
        <div>
          COLL 1
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            alias autem. Soluta neque sequi repudiandae autem culpa pariatur, et
            veritatis quisquam quos ratione eveniet necessitatibus delectus
            temporibus veniam iure voluptatibus? Zdes budet 4toto, a ti pidor
            eli 4itaesh
          </p>
        </div>

        <ReactPhotoSphereViewer
          src='1.jpg'
          height={"800px"}
          width={"100%"}
        ></ReactPhotoSphereViewer>
      </div>
    </main>
  );
}
