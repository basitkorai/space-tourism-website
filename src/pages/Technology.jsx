import { useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import NumberedIndicators from '../components/NumberedIndicators'
import AppProvider, { useGlobalContext } from '../context/context'
import backgroundImages from '../utils/backgroundImages'
import launchVehicleLandscape from '../assets/images/technology/image-launch-vehicle-landscape.jpg'
import launchVehiclePortrait from '../assets/images/technology/image-launch-vehicle-portrait.jpg'
import spaceportLandscape from '../assets/images/technology/image-spaceport-landscape.jpg'
import spaceportPortrait from '../assets/images/technology/image-spaceport-portrait.jpg'
import spaceCapsuleLandscape from '../assets/images/technology/image-space-capsule-landscape.jpg'
import spaceCapsulePortrait from '../assets/images/technology/image-space-capsule-portrait.jpg'
import data from '../data/data.json'

const technology = data.technology

const Technology = () => {
  const [isVisible, setIsVisible] = useState(true)
  const { tech, setTech } = useGlobalContext()

  const { name, description } = tech

  const one = name === 'Launch vehicle'
  const two = name === 'Spaceport'
  const three = name === 'Space capsule'

  const handleClick = (index) => {
    if (tech === technology[index]) return
    setIsVisible(false)
    setTimeout(() => {
      setTech(technology[index])
    }, 800)
  }
  return (
    <AppProvider>
      <div className={`bg-technology ${backgroundImages}`}>
        <header>
          <Navbar />
          <Sidebar />
        </header>
        <div className=" text-center lg:text-left pb-[3.52rem] lg:pb-0 mt-6 md:mt-10 lg:mt-[4.75rem] mx-auto lg:ml-auto border border-transparent border-solid">
          <div className="">
            <div className="lg:max-w-[88.54%] lg:grid lg:grid-cols-2 justify-center lg:justify-between lg:ml-auto">
              <p className="lg:hidden md:pl-[2.375rem] lg:pl-[0rem] text-base md:text-xl lg:text-[1.75rem] uppercase font-sans_cond tracking-[0.16875rem] text-center md:text-left mb-8 md:mb-[3.75rem]">
                <span className="font-bold opacity-25 mr-[1.12rem]">03</span>
                Space launch 101
              </p>
              <AnimatePresence mode="popLayout">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ ease: 'backOut', duration: 2 }}
                  className="lg:order-last grid justify-end"
                >
                  <picture
                    onLoad={() => {
                      setTimeout(() => {
                        setIsVisible(true)
                      }, 100)
                    }}
                  >
                    <source
                      media="(min-width:1024px)"
                      srcSet={
                        one
                          ? launchVehiclePortrait
                          : two
                          ? spaceportPortrait
                          : three
                          ? spaceCapsulePortrait
                          : spaceCapsulePortrait
                      }
                    />
                    <img
                      className="w-screen lg:w-full max-h-[32.1875rem] mt-auto"
                      src={
                        one
                          ? launchVehicleLandscape
                          : two
                          ? spaceportLandscape
                          : three
                          ? spaceCapsuleLandscape
                          : spaceCapsuleLandscape
                      }
                      alt={name}
                    />
                  </picture>
                </motion.div>
              </AnimatePresence>
              <div className="px-6 lg:order-first ">
                <p className="hidden lg:block md:pl-[2.375rem] lg:pl-[0rem] text-base md:text-xl lg:text-[1.75rem] uppercase font-sans_cond tracking-[0.16875rem] text-center md:text-left mb-8 md:mb-[3.75rem] lg:mb-[8.56rem]">
                  <span className="font-bold opacity-25 mr-[1.12rem]">03</span>
                  Space launch 101
                </p>
                <div className="lg:flex items-center gap-8">
                  <NumberedIndicators
                    handleClick={handleClick}
                    currentTech={name}
                    updateTech={setTech}
                  />
                  <div>
                    <MotionConfig transition={{ ease: 'backOut', duration: 2 }}>
                      <AnimatePresence>
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <p className="grid gap-2 lg:gap-[0.94rem] mb-4 md:mb-[1.75rem] lg:mb-[1.69rem] max-w-[20.4375rem] md:max-w-[27.75rem] lg:max-w-full mt-8 md:mt-0 mx-auto uppercase text-center lg:text-left font-sans_cond tracking-normal leading-none">
                            <span className="text-sh2 md:text-[1.5rem] opacity-50">
                              The Terminology...
                            </span>
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: isVisible ? 1 : 0 }}
                              className="text-sh1 md:text-[2.5rem] font-serif"
                            >
                              {name}
                            </motion.span>
                          </p>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            className="max-lg:mx-auto text-center lg:text-left text-[0.9375rem] md:text-base max-w-[20.4375rem] md:max-w-[27.75rem] leading-normal md:leading-7 mx-auto"
                          >
                            {description}
                          </motion.p>
                        </motion.div>
                      </AnimatePresence>
                    </MotionConfig>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default Technology
