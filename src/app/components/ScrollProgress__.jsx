"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-gray-900">
      {/* Header */}
      {/* {motion type} */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[5px] bg-[#161d35] origin-[0%] z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
