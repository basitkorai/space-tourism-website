import { useGlobalContext } from '../context/context'
import data from '../data/data.json'
const team = data.crew

const RoundIndicators = ({ hideOn, currentCrew, updateCrew }) => {
  const isCrew1 = currentCrew === `Douglas Hurley`
  const isCrew2 = currentCrew === `Mark Shuttleworth`
  const isCrew3 = currentCrew === `Victor Glover`
  const isCrew4 = currentCrew === `Anousheh Ansari`

  return (
    <div
      className={`round-indicators text-center flex gap-4 justify-center lg:justify-start items-center my-8 md:my-10 lg:mt-[7.5rem] ${hideOn}`}
    >
      <button
        onClick={() => {
          updateCrew(team[0])
        }}
        aria-selected={isCrew1}
        className={`pb-4 ${
          isCrew1 ? 'bg-white' : 'bg-grey hover:bg-translucent'
        } aspect-square rounded-full`}
      ></button>
      <button
        onClick={() => {
          updateCrew(team[1])
        }}
        aria-selected={isCrew2}
        className={`pb-4 ${
          isCrew2 ? 'bg-white' : 'bg-grey hover:bg-translucent'
        } aspect-square rounded-full`}
      ></button>
      <button
        onClick={() => {
          updateCrew(team[2])
        }}
        aria-selected={isCrew3}
        className={`pb-4 ${
          isCrew3 ? 'bg-white' : 'bg-grey hover:bg-translucent'
        } aspect-square rounded-full`}
      ></button>
      <button
        onClick={() => {
          updateCrew(team[3])
        }}
        aria-selected={isCrew4}
        className={`pb-4 ${
          isCrew4 ? 'bg-white' : 'bg-grey hover:bg-translucent'
        } aspect-square rounded-full`}
      ></button>
    </div>
  )
}

export default RoundIndicators
