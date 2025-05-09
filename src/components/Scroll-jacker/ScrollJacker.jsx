import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Col, Row } from "reactstrap";
import classes from "./ScrollJacker.module.css";
import AutoDisappearText from "../Auto-disappear-text/AutoDisappearText";
const steps = [
  "Nonprofits are mission-driven-but often resource-limited",
  "Businesses are resource-rich but often impact-hungry",
  "what if purpose and profit didn't have to be seperated?",
];

export default function ScrollJackerSection() {
  const [index, setIndex] = useState(0);
  const [showCircles, setShowCircles] = useState(false);
  const [unlockScroll, setUnlockScroll] = useState(false);
  const [completedOnce, setCompletedOnce] = useState(false);

  const sectionRef = useRef(null);
  const activeRef = useRef(false);
  const lockRef = useRef(false);
  const lastScrollY = useRef(window.scrollY);
  const lastDirection = useRef("down");
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // Watch scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current) {
        lastDirection.current = "down";
      } else if (current < lastScrollY.current) {
        lastDirection.current = "up";
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to handle lock logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const entering = entry.isIntersecting;
        activeRef.current = entering;

        const fromTop =
          window.scrollY < entry.boundingClientRect.top + window.scrollY;

        // Only start scroll-jack if scrolling down and not completed before
        if (
          entering &&
          lastDirection.current === "down" &&
          !unlockScroll &&
          !completedOnce
        ) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      },
      { threshold: 0.9 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      document.body.style.overflow = "";
    };
  }, [unlockScroll, completedOnce]);

  // Handle scroll-lock steps
  useEffect(() => {
    const onWheel = (e) => {
      if (!activeRef.current || lockRef.current || unlockScroll) return;

      e.preventDefault();
      lockRef.current = true;

      if (index < steps.length - 1) {
        setIndex((i) => i + 1);
      } else if (!showCircles) {
        setShowCircles(true);
      }

      setTimeout(() => {
        lockRef.current = false;
      }, 1000);
    };

    document.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", onWheel);
    };
  }, [index, showCircles, unlockScroll]);

  // Allow scroll after circles
  useEffect(() => {
    if (showCircles) {
      const timeout = setTimeout(() => {
        setUnlockScroll(true);
        setCompletedOnce(true);
        document.body.style.overflow = "";
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showCircles]);

  return (
    <div
      ref={sectionRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        color: "white",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <AnimatePresence mode="wait">
        {!showCircles ? (
          <div className="w-100">
            <img
              src="/images/venbg.png"
              alt="bg"
              style={{ height: 900, width: "100%" }}
            />
            <Row className={classes.detail}>
              <Col sm={5} className="text-center">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 120, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -130, filter: "blur(8px)" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="text-center display-4"
                  style={{ fontWeight: "bold" }}
                >
                  {steps[index]}
                </motion.div>
              </Col>
            </Row>
          </div>
        ) : (
          <>
            {showFirst && (
              <AutoDisappearText
                delay={0}
                duration={4000}
                text=" Imagine a space where strategy meets service..."
                onDisappear={() => {
                  setShowFirst(false);
                  setTimeout(() => setShowSecond(true), 200); // Optional gap
                }}
              ></AutoDisappearText>
            )}
            {showSecond && (
              <AutoDisappearText
                delay={0}
                duration={4000}
                text=" At the intersection of mission and market lies true collaboration."
                onDisappear={() => {
                  setShowSecond(false);
                  setTimeout(() => setShowThird(true), 200); // Optional gap
                }}
              ></AutoDisappearText>
            )}

            {showThird && (
              <AutoDisappearText
                delay={0}
                duration={0}
                text=" This is where real change begins."
                onDisappear={() => {
                  setTimeout(() => setShowOverlay(true), 5000); // Optional gap
                }}
              ></AutoDisappearText>
            )}

            <motion.div
              key="circles"
              className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="position-absolute rounded-circle"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 4, ease: "easeInOut" }}
                style={{
                  right: "22%",
                  top: "30%",
                  transform: "translateY(-50%)",
                  border: "3px dotted #000",
                  padding: "30px",
                }}
              >
                <img
                  src="/images/yellow_circle.png"
                  alt="bg"
                  style={{ height: 500, width: "auto", opacity: 0.8 }}
                />
                <motion.div
                  animate={{ opacity: 0 }}
                  transition={{ duration: 8 }}
                  style={{
                    position: "absolute",
                    top: "80%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "24px",
                    opacity: 1,
                  }}
                >
                  Nonprofit
                </motion.div>
                <motion.div
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 4 }}
                  style={{
                    opacity: 0,
                  }}
                >
                  <img
                    src="/images/woman.png"
                    alt="bg"
                    style={{
                      position: "absolute",
                      top: "46%",
                      right: "-9%",
                      height: 450,
                      width: "auto",
                      zIndex: 9,
                      transform: "translate(-30%, -37%)",
                      opacity: 1,
                    }}
                  />
                </motion.div>
                <motion.div
                  className="position-absolute"
                  initial={{ x: "100vw" }}
                  animate={{ x: 300 }}
                  transition={{ duration: 4, delay: 3.5 }}
                  style={{ top: -22 }}
                >
                  <img
                    src="/images/piechart.png"
                    alt="pie"
                    style={{ height: 150, width: "auto", opacity: 0.8 }}
                  />
                </motion.div>
                <motion.div
                  className="position-absolute"
                  initial={{ x: "100vw" }}
                  animate={{ x: 450 }}
                  transition={{ duration: 6, delay: 6 }}
                  style={{ top: 100 }}
                >
                  <img
                    src="/images/notes.png"
                    alt="pie"
                    style={{ height: 260, width: "auto" }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="position-absolute rounded-circle"
                initial={{ x: "-100vw" }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 4, ease: "easeInOut" }}
                style={{
                  left: "22.2%",
                  top: "30%",
                  transform: "translateY(-50%)",
                  border: "3px dotted #000",
                  padding: "30px",
                }}
              >
                <motion.div
                  animate={{ opacity: 0 }}
                  initial={{ opacity: 1 }}
                  transition={{ duration: 8 }}
                  style={{
                    position: "absolute",
                    top: "80%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "24px",
                    opacity: 1,
                    zIndex: 9,
                  }}
                >
                  Business
                </motion.div>
                <motion.div
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 5 }}
                  style={{
                    opacity: 0,
                  }}
                >
                  <img
                    src="/images/duo.png"
                    alt="bg"
                    style={{
                      position: "absolute",
                      top: "59.5%",
                      left: "39%",
                      height: 400,
                      width: "auto",
                      zIndex: 9,
                      transform: "translate(-50%, -50%)",
                      opacity: 1,
                    }}
                  />
                </motion.div>

                <img
                  src="/images/blue_circle.png"
                  alt="bg"
                  style={{ height: 500, width: "auto", opacity: 0.8 }}
                />
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 6, delay: 6 }}
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "17%",
                  height: 450,
                  width: "auto",
                  zIndex: 9,
                  opacity: 1,
                }}
              >
                <img
                  src="/images/volunteer.png"
                  alt="volunteer"
                  style={{
                    width: "auto",
                    height: "100%",
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, delay: 10 }}
                style={{ position: "absolute", top: "38%" }}
              >
                <img src="/images/intersect.png" alt="intersect" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 6, delay: 12 }}
                style={{ position: "absolute", top: "38%" }}
              >
                <img src="/images/handshake.png" alt="handshake" />
              </motion.div>
              {/* modal overlay */}
              {showOverlay && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ ease: "easeIn" }}
                  className="absolute top-0 bottom-0 left-0 right-0 z-[9] bg-black w-100 h-100"
                  style={{
                    opacity: 0.7,
                    zIndex: 99,
                  }}
                >
                  <Row
                    className="justify-content-center align-items-end h-100 align-content-end"
                    style={{ paddingBottom: 100 }}
                  >
                    <Col
                      xs={12}
                      className="text-center"
                      style={{ height: 100 }}
                    >
                      <div
                        className="mt-auto"
                        style={{ fontSize: 22, fontWeight: "600" }}
                      >
                        Ready to build something bigger than yourself?
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      className="text-center"
                      style={{ height: 100 }}
                    >
                      <Button className="mx-3 secondary-btn hover-button p-3">
                        For Nonprofits
                      </Button>
                      <Button className="primary-btn hover-button p-3">
                        For Business
                      </Button>
                    </Col>
                  </Row>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
