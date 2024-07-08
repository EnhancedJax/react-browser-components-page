"use client";

import { useAppContext } from "@/providers/provider";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      y: "-50%",
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    y: "-50%",
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      y: "-50%",
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function BrowserDemo() {
  const { browsers, index, page, direction, paginate, darkTheme } =
    useAppContext();

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute flex items-center justify-center w-full -translate-y-1/2 h-4/5 top-1/2"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {browsers[index][darkTheme ? "dark" : "light"]?.Component ||
            browsers[index].Component}
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute z-20 flex items-center justify-center w-10 h-10 text-lg font-bold -translate-y-1/2 bg-white border rounded-full shadow-lg cursor-pointer border-neutral-200 top-1/2 right-3 dark:border-neutral-700 dark:bg-neutral-800"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </div>
      <div
        className="absolute z-20 flex items-center justify-center w-10 h-10 text-lg font-bold -translate-y-1/2 bg-white border rounded-full shadow-lg cursor-pointer border-neutral-200 top-1/2 left-3 -scale-x-100 dark:border-neutral-700 dark:bg-neutral-800"
        onClick={() => paginate(-1)}
      >
        {"‣"}
      </div>
    </>
  );
}
