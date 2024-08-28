import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
export default function Modal({ children, open }) {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (open) {
      document.body.classList.add("overflow-y-hidden");
      document.body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.style.marginRight = "";
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
      document.body.style.marginRight = "";
    };
  }, [open]);

  return createPortal(
    <>
      <AnimatePresence initial={false} wait={true}>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-screen w-screen fixed z-50 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center"
          >
            <div className="w-[800px] h-[400px] rounded-3xl bg-white overflow-hidden">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.getElementById("modal")
  );
}