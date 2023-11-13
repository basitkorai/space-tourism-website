import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AppProvider from '../context/context'
import backgroundImages from '../utils/backgroundImages'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <AppProvider>
      <div className={`bg-home ${backgroundImages}`}>
        <header>
          <Navbar />
          <Sidebar />
        </header>
        <div
          className={`container grid place-items-center lg:grid-cols-2 lg:justify-between px-4 tall:pb-20 mx-auto mt-6 md:mt-[6.62rem] lg:mt-[15.69rem]`}
        >
          <motion.div
            initial={{ x: -800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-center lg:text-left mb-[5.06rem] md:mb-[9.75rem] lg:mb-0"
          >
            <h1 className="grid gap-4 md:gap-6">
              <span className="font-sans_cond text-base text-accent leading-none md:text-xl lg:text-[1.75rem]">
                SO, YOU WANT TO TRAVEL TO
              </span>
              <span className="text-[5rem] md:text-h1 block font-serif lg:leading-none">
                SPACE
              </span>
            </h1>
            <p className="text-[0.9375rem] md:text-base max-w-[20.4375rem] md:max-w-[27.75rem] text-accent leading-normal">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="grid place-content-center mb-12 lg:mb-0 lg:self-end xl:mr-[10.125rem] lg:justify-self-end"
          >
            <Button />
          </motion.div>
        </div>
      </div>
    </AppProvider>
  )
}

export default Home
