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
  const [unlockScroll, setUnlockScroll] = useState(false);
  const [completedOnce, setCompletedOnce] = useState(false);

  // Animation states
  const [circleStage, setCircleStage] = useState(0);
  const [circleTextsVisible, setCircleTextsVisible] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);
  const [overlayText, setOverlayText] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [showWoman, setShowWoman] = useState(false);
  const [showDuo, setShowDuo] = useState(false);
  const [showPieChart, setShowPieChart] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);
  const [showIntersect, setShowIntersect] = useState(false);
  const [showHandshake, setShowHandshake] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const sectionRef = useRef(null);
  const activeRef = useRef(false);
  const lockRef = useRef(false);
  const lastScrollY = useRef(window.scrollY);
  const lastDirection = useRef("down");
  const overlayTimeoutRef = useRef(null);
  const wheelCooldownRef = useRef(false);

  // Normalize scroll delta for different input devices (Windows-friendly)
  const normalizeWheelDelta = (deltaY) => {
    // Handle different mouse wheel sensitivities and trackpads
    const absDelta = Math.abs(deltaY);

    // Trackpad (usually smaller values)
    if (absDelta < 50) return absDelta > 10 ? 1 : 0;

    // Mouse wheel (usually larger values)
    if (absDelta < 200) return 1;

    // High sensitivity mouse or fast scroll
    return 1;
  };

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

  // Effect to manage overlay text based on animation step
  useEffect(() => {
    switch (animationStep) {
      case 1: // During woman and duo animation
        setCurrentText("Imagine a space where strategy meets service...");
        break;
      case 2: // During pie chart and notes
        setCurrentText(
          "At the intersection of mission and market lies true collaboration."
        );
        break;
      case 3: // During volunteer and intersect
        setCurrentText("This is where real change begins.");
        break;
      default:
        setCurrentText("");
    }
  }, [animationStep]);

  // Effect to unlock scroll when all animations are complete
  useEffect(() => {
    if (showOverlay) {
      const timeout = setTimeout(() => {
        setUnlockScroll(true);
        setCompletedOnce(true);
        setOverlayText(""); // Clear any remaining overlay text
        // Clear overlay timeout
        if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
        document.body.style.overflow = "";
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showOverlay]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
    };
  }, []);

  // Additional safety effect to prevent floating text
  useEffect(() => {
    if (showHandshake || showOverlay || unlockScroll) {
      // Force clear overlay text when reaching final phases
      setOverlayText("");
      if (overlayTimeoutRef.current) {
        clearTimeout(overlayTimeoutRef.current);
        overlayTimeoutRef.current = null;
      }
    }
  }, [showHandshake, showOverlay, unlockScroll]);

  // Monitor overlay text and ensure it doesn't persist too long
  useEffect(() => {
    if (overlayText && (showHandshake || showOverlay)) {
      // If text is showing during final phases, clear it immediately
      setOverlayText("");
      if (overlayTimeoutRef.current) {
        clearTimeout(overlayTimeoutRef.current);
        overlayTimeoutRef.current = null;
      }
    }
  }, [overlayText, showHandshake, showOverlay]);

  // Handle scroll-lock steps
  useEffect(() => {
    const onWheel = (e) => {
      if (
        !activeRef.current ||
        lockRef.current ||
        unlockScroll ||
        wheelCooldownRef.current
      )
        return;

      // Normalize wheel delta for Windows compatibility
      const shouldProgress = normalizeWheelDelta(e.deltaY);
      if (!shouldProgress) return;

      e.preventDefault();
      lockRef.current = true;
      wheelCooldownRef.current = true;

      // Sequential animation progression
      if (index < steps.length - 1) {
        setIndex((i) => i + 1);
      } else if (index === steps.length - 1 && circleStage === 0) {
        setCircleStage(1);
        setCircleTextsVisible(false);
      } else if (!showWoman && !showDuo) {
        setShowWoman(true);
        setShowDuo(true);
        setOverlayText("Imagine a space where strategy meets service...");
        // Clear any existing timeout and set new one
        if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
        overlayTimeoutRef.current = setTimeout(() => setOverlayText(""), 3000);
      } else if (!showPieChart && !showNotes) {
        setShowPieChart(true);
        setShowNotes(true);
        setOverlayText(
          "At the intersection of mission and market lies true collaboration."
        );
        // Clear any existing timeout and set new one
        if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
        overlayTimeoutRef.current = setTimeout(() => setOverlayText(""), 3000);
      } else if (!showVolunteer && !showIntersect) {
        setShowVolunteer(true);
        setShowIntersect(true);
        setOverlayText("This is where real change begins.");
        // Clear any existing timeout and set new one
        if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
        overlayTimeoutRef.current = setTimeout(() => setOverlayText(""), 3000);
      } else if (!showHandshake) {
        setShowHandshake(true);
        setOverlayText("");
        // Clear any existing timeout
        if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
      } else if (!showOverlay) {
        setShowOverlay(true);
        setOverlayText(""); // Ensure overlay text is cleared
        // Clear any existing timeout
        if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
      }

      // Additional safety: Clear overlay text after each step
      setTimeout(() => {
        if (showHandshake || showOverlay) {
          setOverlayText("");
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
        }
      }, 100);

      setTimeout(() => {
        lockRef.current = false;
        wheelCooldownRef.current = false;
      }, 1000);
    };

    document.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", onWheel);
    };
  }, [
    index,
    circleStage,
    showWoman,
    showDuo,
    showPieChart,
    showNotes,
    showVolunteer,
    showIntersect,
    showHandshake,
    showOverlay,
    unlockScroll,
  ]);

  // Add keyboard navigation for Windows accessibility
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!activeRef.current || lockRef.current || unlockScroll) return;

      // Arrow Down, Space, or Page Down to progress
      if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        lockRef.current = true;

        // Same progression logic as wheel event
        if (index < steps.length - 1) {
          setIndex((i) => i + 1);
        } else if (index === steps.length - 1 && circleStage === 0) {
          setCircleStage(1);
          setCircleTextsVisible(false);
        } else if (!showWoman && !showDuo) {
          setShowWoman(true);
          setShowDuo(true);
          setOverlayText("Imagine a space where strategy meets service...");
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
          overlayTimeoutRef.current = setTimeout(
            () => setOverlayText(""),
            3000
          );
        } else if (!showPieChart && !showNotes) {
          setShowPieChart(true);
          setShowNotes(true);
          setOverlayText(
            "At the intersection of mission and market lies true collaboration."
          );
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
          overlayTimeoutRef.current = setTimeout(
            () => setOverlayText(""),
            3000
          );
        } else if (!showVolunteer && !showIntersect) {
          setShowVolunteer(true);
          setShowIntersect(true);
          setOverlayText("This is where real change begins.");
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
          overlayTimeoutRef.current = setTimeout(
            () => setOverlayText(""),
            3000
          );
        } else if (!showHandshake) {
          setShowHandshake(true);
          setOverlayText("");
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
        } else if (!showOverlay) {
          setShowOverlay(true);
          setOverlayText("");
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
        }

        setTimeout(() => {
          lockRef.current = false;
        }, 1000);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [
    index,
    circleStage,
    showWoman,
    showDuo,
    showPieChart,
    showNotes,
    showVolunteer,
    showIntersect,
    showHandshake,
    showOverlay,
    unlockScroll,
  ]);

  // Add touch support for Windows tablets
  useEffect(() => {
    let startY = 0;
    let endY = 0;

    const onTouchStart = (e) => {
      if (!activeRef.current || lockRef.current || unlockScroll) return;
      startY = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (!activeRef.current || lockRef.current || unlockScroll) return;
      endY = e.changedTouches[0].clientY;

      // Detect upward swipe (scroll down equivalent)
      if (startY > endY + 50) {
        e.preventDefault();
        lockRef.current = true;

        // Same progression logic
        if (index < steps.length - 1) {
          setIndex((i) => i + 1);
        } else if (index === steps.length - 1 && circleStage === 0) {
          setCircleStage(1);
          setCircleTextsVisible(false);
        } else if (!showWoman && !showDuo) {
          setShowWoman(true);
          setShowDuo(true);
          setOverlayText("Imagine a space where strategy meets service...");
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
          overlayTimeoutRef.current = setTimeout(
            () => setOverlayText(""),
            3000
          );
        } else if (!showPieChart && !showNotes) {
          setShowPieChart(true);
          setShowNotes(true);
          setOverlayText(
            "At the intersection of mission and market lies true collaboration."
          );
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
          overlayTimeoutRef.current = setTimeout(
            () => setOverlayText(""),
            3000
          );
        } else if (!showVolunteer && !showIntersect) {
          setShowVolunteer(true);
          setShowIntersect(true);
          setOverlayText("This is where real change begins.");
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
          overlayTimeoutRef.current = setTimeout(
            () => setOverlayText(""),
            3000
          );
        } else if (!showHandshake) {
          setShowHandshake(true);
          setOverlayText("");
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
        } else if (!showOverlay) {
          setShowOverlay(true);
          setOverlayText("");
          if (overlayTimeoutRef.current)
            clearTimeout(overlayTimeoutRef.current);
        }

        setTimeout(() => {
          lockRef.current = false;
        }, 1000);
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener("touchstart", onTouchStart, {
        passive: false,
      });
      sectionRef.current.addEventListener("touchend", onTouchEnd, {
        passive: false,
      });
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener("touchstart", onTouchStart);
        sectionRef.current.removeEventListener("touchend", onTouchEnd);
      }
    };
  }, [
    index,
    circleStage,
    showWoman,
    showDuo,
    showPieChart,
    showNotes,
    showVolunteer,
    showIntersect,
    showHandshake,
    showOverlay,
    unlockScroll,
  ]);

  return (
    <div
      ref={sectionRef}
      style={{
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        color: "white",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <AnimatePresence mode="wait">
        {circleStage === 0 ? (
          <motion.div
            key="initial-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-100 h-100"
            style={{
              position: "relative",
              backgroundImage: "url('/images/venbg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#1a1a1a", // Fallback color similar to the image
            }}
          >
            <Row className={classes.detail}>
              <Col sm={5} className="text-center">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 120, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -130, filter: "blur(8px)" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="text-center display-4"
                  style={{ fontWeight: "bold" }}
                >
                  {steps[index]}
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        ) : (
          <>
            {/* Floating Text Overlay */}
            <AnimatePresence mode="wait">
              {overlayText && (
                <motion.div
                  key={overlayText}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    position: "fixed",
                    top: "20%",
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    textAlign: "center",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      padding: "20px 40px",
                      background: "transparent",
                      borderRadius: "10px",
                      color: "black",
                      fontSize: "28px",
                      fontWeight: "bold",
                      maxWidth: "80%",
                      margin: "0 auto",
                    }}
                  >
                    {overlayText}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Content */}
            <motion.div
              key="circles"
              className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                minHeight: "100vh",
              }}
            >
              {/* Yellow Circle */}
              <motion.div
                className="position-absolute rounded-circle"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
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
                {circleTextsVisible && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                      position: "absolute",
                      top: "80%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "24px",
                    }}
                  >
                    Nonprofit
                  </motion.div>
                )}

                {showWoman && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <img
                      src="/images/woman.png"
                      alt="woman"
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "-9%",
                        height: 450,
                        width: "auto",
                        zIndex: 9,
                        transform: "translate(-30%, -37%)",
                      }}
                    />
                  </motion.div>
                )}

                {showPieChart && (
                  <motion.div
                    className="position-absolute"
                    initial={{ x: "100vw" }}
                    animate={{ x: 300 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ top: -22 }}
                  >
                    <img
                      src="/images/piechart.png"
                      alt="pie"
                      style={{ height: 150, width: "auto", opacity: 0.8 }}
                    />
                  </motion.div>
                )}

                {showNotes && (
                  <motion.div
                    className="position-absolute"
                    initial={{ x: "100vw" }}
                    animate={{ x: 450 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ top: 100 }}
                  >
                    <img
                      src="/images/notes.png"
                      alt="notes"
                      style={{ height: 260, width: "auto" }}
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* Blue Circle */}
              <motion.div
                className="position-absolute rounded-circle"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                  left: "22.2%",
                  top: "30%",
                  transform: "translateY(-50%)",
                  border: "3px dotted #000",
                  padding: "30px",
                }}
              >
                <img
                  src="/images/blue_circle.png"
                  alt="bg"
                  style={{ height: 500, width: "auto", opacity: 0.8 }}
                />
                {circleTextsVisible && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                      position: "absolute",
                      top: "80%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "24px",
                      zIndex: 9,
                    }}
                  >
                    Business
                  </motion.div>
                )}

                {showDuo && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <img
                      src="/images/duo.png"
                      alt="duo"
                      style={{
                        position: "absolute",
                        top: "59.5%",
                        left: "39%",
                        height: 400,
                        width: "auto",
                        zIndex: 9,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>

              {showVolunteer && (
                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "17%",
                    height: 450,
                    width: "auto",
                    zIndex: 9,
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
              )}

              {showIntersect && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ position: "absolute", top: "38%" }}
                >
                  <img src="/images/intersect_one.png" alt="intersect" />
                </motion.div>
              )}

              {showHandshake && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ position: "absolute", top: "38%" }}
                >
                  <img src="/images/handshake.png" alt="handshake" />
                </motion.div>
              )}

              {/* Auto-disappear text components */}
              {showFirst && (
                <AutoDisappearText
                  delay={0}
                  duration={4000}
                  text=" Imagine a space where strategy meets service..."
                  onDisappear={() => setShowFirst(false)}
                />
              )}
              {showSecond && (
                <AutoDisappearText
                  delay={0}
                  duration={4000}
                  text=" At the intersection of mission and market lies true collaboration."
                  onDisappear={() => setShowSecond(false)}
                />
              )}
              {showThird && (
                <AutoDisappearText
                  delay={0}
                  duration={4000}
                  text=" This is where real change begins."
                  onDisappear={() => setShowThird(false)}
                />
              )}

              {/* Final Overlay with Button */}
              {showOverlay && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="position-absolute top-0 bottom-0 left-0 right-0"
                  style={{
                    backgroundColor: "black",
                    zIndex: 99,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Row
                    className="justify-content-center align-items-end h-100"
                    style={{ paddingBottom: 100 }}
                  >
                    <Col xs={12} className="text-center">
                      <div className="mb-5">
                        <h2
                          style={{
                            color: "white",
                            fontSize: "24px",
                            fontWeight: "bold",
                            marginBottom: "60px",
                          }}
                        >
                          Ready to build something bigger than yourself?
                        </h2>
                      </div>
                      <div className="d-flex justify-content-center gap-4">
                        <Button
                          size="lg"
                          className={classes.headerButton}
                          style={{
                            border: "2px solid #2C55F9",
                            color: "#2C55F9",
                            backgroundColor: "transparent",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = "#2C55F9";
                            e.currentTarget.style.color = "white";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color = "#2C55F9";
                          }}
                          onClick={() => {
                            window.location.href =
                              "https://brands.dogoodpoints.com/";
                          }}
                        >
                          For Business
                        </Button>
                        <Button
                          size="lg"
                          className={classes.headerButton}
                          style={{
                            border: "2px solid #FFBD01",
                            color: "#FFBD01",
                            backgroundColor: "transparent",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = "#FFBD01";
                            e.currentTarget.style.color = "black";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color = "#FFBD01";
                          }}
                          onClick={() => {
                            window.location.href =
                              "https://nonprofits.dogoodpoints.com/";
                          }}
                        >
                          For Nonprofits
                        </Button>
                      </div>
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
