import { motion } from 'framer-motion'

const DestinationImage = ({ image }) => {
  return (
    <motion.img
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.25 }}
      transition={{ ease: 'backOut', duration: 2 }}
      src={image}
      alt=""
      width="445"
      height="445"
    />
  )
}

export default DestinationImage
