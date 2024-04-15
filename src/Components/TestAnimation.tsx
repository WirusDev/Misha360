import * as React from "react";
import { motion } from "framer-motion";

export default function Animation() {
  const [isOpne, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.div
        onClick={() => setIsOpen(!isOpne)}
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout='position'
        className='card bg-white w-[500px] rounded-2xl'
      >
        <motion.h2 layout className='text-black justify-start'>
          Framer Motion Test
        </motion.h2>
        {isOpne && (
          <motion.div className='text-black pt-3'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
              et laudantium at, recusandae odit fuga impedit ipsam, temporibus
              aliquid itaque maxime placeat expedita corporis non officia illo
              laboriosam excepturi eos?
            </p>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
