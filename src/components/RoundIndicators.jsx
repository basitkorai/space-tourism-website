import { AnimatePresence, motion } from 'framer-motion'
import data from '../data/data.json'
const team = data.crew

const RoundIndicators = ({
  hideOn,
  currentCrew,
  updateCrew,
  setVisible,
  isVisible,
}) => {
  const isCrew1 = currentCrew === `Douglas Hurley`
  const isCrew2 = currentCrew === `Mark Shuttleworth`
  const isCrew3 = currentCrew === `Victor Glover`
  const isCrew4 = currentCrew === `Anousheh Ansari`

  const handleClick = (index) => {
    if (currentCrew === team[index].name) return
    setVisible(false)
    setTimeout(() => {
      updateCrew(team[index])
      setVisible((prevState) => (prevState === false ? true : false))
    }, 1100)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'backOut', duration: 2 }}
        className={`round-indicators text-center flex gap-4 justify-center lg:justify-start items-center my-8 md:my-10 lg:mt-[7.5rem] ${hideOn}`}
      >
        <button
          onClick={() => {
            handleClick(0)
          }}
          aria-selected={isCrew1}
          className={`pb-4 ${
            isCrew1 ? 'bg-white' : 'bg-grey hover:bg-translucent'
          } aspect-square rounded-full`}
        ></button>
        <button
          onClick={() => {
            handleClick(1)
          }}
          aria-selected={isCrew2}
          className={`pb-4 ${
            isCrew2 ? 'bg-white' : 'bg-grey hover:bg-translucent'
          } aspect-square rounded-full`}
        ></button>
        <button
          onClick={() => {
            handleClick(2)
          }}
          aria-selected={isCrew3}
          className={`pb-4 ${
            isCrew3 ? 'bg-white' : 'bg-grey hover:bg-translucent'
          } aspect-square rounded-full`}
        ></button>
        <button
          onClick={() => {
            handleClick(3)
          }}
          aria-selected={isCrew4}
          className={`pb-4 ${
            isCrew4 ? 'bg-white' : 'bg-grey hover:bg-translucent'
          } aspect-square rounded-full`}
        ></button>
      </motion.div>
    </AnimatePresence>
  )
}

export default RoundIndicators
