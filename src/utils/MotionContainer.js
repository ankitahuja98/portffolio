export const MotionContainer = (direction, delay, x, y) => ({
  hidden: {
    y: direction === "up" ? y : direction === "down" ? -y : 0,
    x: direction === "left" ? x : direction === "right" ? -x : 0,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
