import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const DestinationInfo = ({
  info: { name, description, distance, travel },
  visible,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ ease: 'linear', duration: 0.7 }}
    >
      <h2 className="text-h3 md:text-[5rem] lg:text-[6.25rem] font-serif leading-none my-4 md:my-0 lg:mb-[0.88rem] uppercase">
        {name}
      </h2>
      <p className="text-[0.9375rem] md:text-base max-w-[20.4375rem] md:max-w-[35.8125rem] text-accent leading-normal lg:leading-8 mx-auto">
        {description}
      </p>
      <div className="grid lg:flex gap-8 lg:gap-[4.94rem] mb-[3.56rem] md:mb-[1.75rem] max-w-[20.4375rem] md:max-w-[27.75rem] lg:max-w-full pt-8 mt-8 md:mt-[3.02rem] lg:mt-[3.37rem] border-t-[0.0625rem] border-grey border-dash max-md:mx-auto uppercase">
        <p className="flex flex-col">
          <span className="text-sh2 font-sans_cond text-accent">
            AVG. DISTANCE
          </span>
          <span className="text-sh1 font-serif">{distance}</span>
        </p>
        <p className="flex flex-col">
          <span className="text-sh2 font-sans_cond uppercase text-accent">
            Est. travel time
          </span>
          <span className="text-sh1 font-serif">{travel}</span>
        </p>
      </div>
    </motion.div>
  )
}

export default DestinationInfo
