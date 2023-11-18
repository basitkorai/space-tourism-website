import backgroundImages from '../utils/backgroundImages'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div
      className={`bg-not-found ${backgroundImages} grid place-content-center`}
    >
      <div
        className={`container grid place-items-center lg:grid-cols-2 lg:justify-between px-4 tall:pb-20 mx-auto`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'linear' }}
          className="text-center lg:text-left"
        >
          <h1 className="grid gap-4 md:gap-6">
            <span className="font-sans_cond text-base text-accent leading-none md:text-xl lg:text-[1.75rem]">
              We Traveled far away in
            </span>
            <span className="text-[5rem] md:text-h1 block font-serif lg:leading-none">
              SPACE,
            </span>
            <span className="font-sans_cond text-base text-accent leading-none md:text-xl lg:text-[1.75rem]">
              but couldn't find what you were look for
            </span>
          </h1>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
