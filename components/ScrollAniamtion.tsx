"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollAniamtion() {

    const {scrollYProgress} = useScroll();

    const scaleX = useSpring(scrollYProgress)

  return (
    <div>
        <motion.div className="origin-left bg-blue-800 w-full h-3" style={{scaleX}} ></motion.div>
    </div>
  )
}
