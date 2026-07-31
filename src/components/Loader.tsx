import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
        >
          <motion.div
            className="font-display text-2xl tracking-tight"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            PK<span className="gradient-text">.</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
