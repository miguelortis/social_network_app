'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, open, onClose }) => {
  const [modalRoot, setModalRoot] = useState(null)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setModalRoot(
        document.getElementById('modal-root') || document.getElementById('body')
      )
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && onClose) {
        onClose(false)
      }
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [onClose])

  useEffect(() => {
    if (open && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto'
      }
    }
  }, [open])

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleClose = () => {
    if (onClose) {
      onClose(false)
    }
  }

  if (!modalRoot) return null

  return open
    ? createPortal(
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'
          style={{ zIndex: 1000 }}
          onClick={handleOutsideClick}
        >
          <div
            className='bg-white rounded-lg '
            style={{ minWidth: '200px', minHeight: '200px' }}
          >
            {children ? (
              children
            ) : (
              <>
                <div className='text-right'>
                  <button
                    className='text-gray-600 hover:text-gray-800'
                    onClick={handleClose}
                  >
                    X
                  </button>
                </div>
                <div className='mt-4'>
                  <h2 className='text-xl font-bold'>¡Este es un modal!</h2>
                  <p>Agrega aquí tu contenido...</p>
                </div>
              </>
            )}
          </div>
        </div>,
        modalRoot
      )
    : null
}

export default Modal
