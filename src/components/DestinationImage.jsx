import { AnimatePresence, motion } from 'framer-motion'

const DestinationImage = ({ image, visible }) => {
  return (
    <AnimatePresence>
      <motion.img
        initial={{ opacity: 0.5 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ ease: 'backOut', duration: 2 }}
        src={image}
        alt=""
        width="445"
        height="445"
      />
    </AnimatePresence>
  )
}

export default DestinationImage
