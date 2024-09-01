import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function SecondModal({ children, open, setModal }) {
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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-screen w-screen fixed z-50 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75   flex justify-center items-center"
            onClick={() => setModal(false)} // Закрытие модального окна при клике на фон
          >
            <div
              className="bg-primaryWhite overflow-hidden p-5 py-10 rounded"
              onClick={(e) => e.stopPropagation()} // Остановка распространения события клика
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.getElementById("secondModal")
  );
}
