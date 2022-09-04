import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion"

const Test = () => {
    return (
      <motion.div style={{width: 700, hieght: 500, backgroundColor: '#2143a1', marginLeft: 300, marginTop: 300}}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    >
      <h1>Testing Library</h1>
    </motion.div>
    );
  }
export default Test