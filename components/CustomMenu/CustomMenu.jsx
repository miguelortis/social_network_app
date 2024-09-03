import { useEffect, useRef } from "react";

export default function CustomMenu({ children, open, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      onClose(false);
    }
  };
  const handleEscape = (event) => {
    if (event.key === "Escape") {
      onClose(false);
    }
  };

  return (
    open && (
      <div className="relative inline-block text-left" ref={menuRef}>
        <div className="px-3 absolute right-0 mt-2 w-max bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">{children && children}</div>
        </div>
      </div>
    )
  );
}
