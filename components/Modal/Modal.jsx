import React from "react";

const Modal = ({ children, open, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          style={{ zIndex: 1000 }}
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white rounded-lg "
            style={{ minWidth: "200px", minHeight: "200px" }}
          >
            {children ? (
              children
            ) : (
              <>
                <div className="text-right">
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleClose}
                  >
                    X
                  </button>
                </div>
                <div className="mt-4">
                  {/* Contenido del modal */}
                  <h2 className="text-xl font-bold">¡Este es un modal!</h2>
                  <p>Agrega aquí tu contenido...</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
