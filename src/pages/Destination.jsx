import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AppProvider, { useGlobalContext } from '../context/context'
import backgroundImages from '../utils/backgroundImages'
import moon from '../assets/images/destination/image-moon.png'
import mars from '../assets/images/destination/image-mars.png'
import europa from '../assets/images/destination/image-europa.png'
import titan from '../assets/images/destination/image-titan.png'
import data from '../data/data.json'
const destinations = data.destinations
import { AnimatePresence, motion } from 'framer-motion'
import DestinationImage from '../components/DestinationImage'
import DestinationInfo from '../components/DestinationInfo'

const Destination = () => {
  const [isVisible, setIsVisible] = useState(true)
  const { destination, setDestination } = useGlobalContext()

  const { name } = destination

  const isMoon = name === `Moon`
  const isMars = name === `Mars`
  const isEuropa = name === `Europa`
  const isTitan = name === `Titan`

  const handleClick = (index) => {
    setIsVisible(false)
    setTimeout(() => {
      setDestination(destinations[index])
      setIsVisible(true)
    }, 1100)
  }

  return (
    <AppProvider>
      <div className={`bg-destination ${backgroundImages}`}>
        <header>
          <Navbar />
          <Sidebar />
        </header>
        <div className="container grid lg:grid-cols-2 pt-6 md:pt-10 lg:pt-[4.75rem] text-center w-full mx-auto">
          <div>
            <p className="md:pl-[2.375rem] lg:pl-[3.47rem] text-base md:text-xl lg:text-[1.75rem] uppercase font-sans_cond tracking-[0.16875rem] text-center md:text-left mb-8 md:mb-[3.75rem] lg:mb-[6.0625rem]">
              <span className="font-bold opacity-25 mr-[1.12rem]">01</span>
              Pick your destination
            </p>
            <div className="max-w-[10.625rem] md:max-w-[18.75rem] lg:max-w-[27.8125rem] mx-auto mb-[1.625rem] md:mb-[3.3125rem] lg:grid justify-items-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    ease: 'linear',
                    repeat: Infinity,
                    duration: 20,
                    repeatType: 'loop',
                  }}
                >
                  <DestinationImage
                    image={
                      isMoon
                        ? moon
                        : isMars
                        ? mars
                        : isEuropa
                        ? europa
                        : isTitan
                        ? titan
                        : null
                    }
                    visible={isVisible}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="grid justify-center lg:justify-start  items-center text-center lg:text-left">
            <motion.div layout className="max-w-[27.8125rem]">
              <div className="tab-list flex justify-center lg:justify-start gap-[1.63rem] sm:gap-8 md:gap-[2.19rem] mb-5 md:mb-8 lg:mb-[2.31rem] items-center">
                <button
                  aria-selected={name === 'Moon' ? 'true' : 'false'}
                  onClick={() => {
                    handleClick(0)
                  }}
                  className={`pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:transition-all after:duration-300 after:content-[''] after:absolute after:h-1 after:w-full after:bottom-0 after:right-0 ${
                    name === 'Moon'
                      ? 'after:bg-white'
                      : 'hover:after:bg-navcolor'
                  }`}
                >
                  Moon
                </button>
                <button
                  aria-selected={name === 'Mars' ? 'true' : 'false'}
                  onClick={() => {
                    handleClick(1)
                  }}
                  className={`pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:transition-all after:duration-300 after:content-[''] after:absolute  after:h-1 after:w-full after:bottom-0 after:right-0 ${
                    name === 'Mars'
                      ? 'after:bg-white'
                      : 'hover:after:bg-navcolor'
                  }`}
                >
                  Mars
                </button>
                <button
                  aria-selected={name === 'Europa' ? 'true' : 'false'}
                  onClick={() => {
                    handleClick(2)
                  }}
                  className={`pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:transition-all after:duration-300 after:content-[''] after:absolute  after:h-1 after:w-full after:bottom-0 after:right-0 ${
                    name === 'Europa'
                      ? 'after:bg-white'
                      : 'hover:after:bg-navcolor'
                  }`}
                >
                  Europa
                </button>
                <button
                  aria-selected={name === 'Titan' ? 'true' : 'false'}
                  onClick={() => {
                    handleClick(3)
                  }}
                  className={`pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:transition-all after:duration-300 after:content-[''] after:absolute  after:h-1 after:w-full after:bottom-0 after:right-0 ${
                    name === 'Titan'
                      ? 'after:bg-white'
                      : 'hover:after:bg-navcolor'
                  }`}
                >
                  Titan
                </button>
              </div>
              <DestinationInfo visible={isVisible} info={{ ...destination }} />
            </motion.div>
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default Destination
