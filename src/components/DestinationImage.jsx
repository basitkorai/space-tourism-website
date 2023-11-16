import { AnimatePresence, motion } from 'framer-motion'

const DestinationImage = ({ image, visible, setIsVisible }) => {
  return (
    <AnimatePresence>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        onLoad={() => {
          setTimeout(() => {
            setIsVisible(true)
          }, 100)
        }}
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
