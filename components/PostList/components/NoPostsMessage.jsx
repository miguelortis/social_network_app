import React from 'react'
import { motion } from 'framer-motion'

const NoPostsMessage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{ textAlign: 'center', marginTop: '20px' }}
  >
    <h2>No se encontraron publicaciones</h2>
    <p>Parece que no hay publicaciones para mostrar. ¡Vuelve más tarde!</p>
  </motion.div>
)

export default NoPostsMessage
