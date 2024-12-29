import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./CustomCursor.css";

const CustomCursor = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleMouseEnterHoverable = () => {
    // change cursor style on hover
    setIsHovering(true);
  };

  const handleMouseLeaveHoverable = () => {
    // revert cursor style when hover ends
    setIsHovering(false);
  };

  useEffect(() => {
    let animationFrameId;

    const checkIsDesktop = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isTouchDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );

      setIsDesktop(!isTouchDevice && window.innerWidth > 768);
    };

    const animateCircle = () => {
      setCirclePosition((prevPosition) => ({
        x: prevPosition.x + (mousePosition.x - prevPosition.x) * 0.2,
        y: prevPosition.y + (mousePosition.y - prevPosition.y) * 0.2,
      }));

      animationFrameId = requestAnimationFrame(animateCircle);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    if (isDesktop) {
      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);

      // add hover listeners for hoverable elements (e.g. nav item)
      const hoverableElements = document.querySelectorAll(".hoverable");
      hoverableElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterHoverable);
        el.addEventListener("mouseleave", handleMouseLeaveHoverable);
      });
    }

    animationFrameId = requestAnimationFrame(animateCircle);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", checkIsDesktop);

      const hoverableElements = document.querySelectorAll(".hoverable");
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterHoverable);
        el.removeEventListener("mouseleave", handleMouseLeaveHoverable);
      });

      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      {/* inner dot cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: isHovering ? "24px" : "4px",
          height: isHovering ? "24px" : "4px",
          backgroundColor: isHovering
            ? "#ff6347"
            : isDarkMode
            ? "red"
            : "#646cff",
          opacity: isHovering ? "0.4" : 1,
          display: isVisible ? "block" : "none",
        }}
      ></div>

      {/* outer circle */}
      <div
        className="custom-cursor-circle"
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
          width: isHovering ? "30px" : "60px",
          height: isHovering ? "30px" : "60px",
          border: isHovering
            ? "1px solid #ff6347"
            : isDarkMode
            ? "1px solid #ffffff"
            : "1px solid #646cff",
          display: isVisible ? "block" : "none",
          opacity: isHovering ? 0.5 : 1,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
