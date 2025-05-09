import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TextFadeIn = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default TextFadeIn;
