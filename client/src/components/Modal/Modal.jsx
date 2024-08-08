import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
export default function Modal({ children, open }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
      document.body.style.overflow = "hidden"; // Отключение прокрутки
    } else {
      dialog.current.close();
      document.body.style.overflow = "auto"; // Включение прокрутки
    }

    // Очистка эффекта при размонтировании
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className="border z-50 p-5 outline-none relative rounded-3xl w-[600px]"
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
