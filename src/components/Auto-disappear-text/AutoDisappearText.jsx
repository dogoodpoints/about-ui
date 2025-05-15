import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AutoDisappearText({ text, duration = 3000, delay = 0, onDisappear }) {
  const [visible, setVisible] = useState(true);
  const totalTime = delay + duration;

  useEffect(() => {
    if (!duration) {
      if (onDisappear) onDisappear();
      return; // it wont disappear
    }
    const timeout = setTimeout(() => {
      setVisible(false);
      if (onDisappear) onDisappear();
    }, totalTime);
    return () => clearTimeout(timeout);
  }, [delay, duration, totalTime, onDisappear]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="auto-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
          transition={{ duration: 1.2, ease: "easeInOut", delay }}
          className="text-center display-4"
          style={{
            color: "black",
            fontSize: "24px",
            fontWeight: "500",
            top: "20%",
            position: "absolute",
          }}
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AutoDisappearText;
