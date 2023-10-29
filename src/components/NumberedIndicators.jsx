import { useGlobalContext } from '../context/context'
import data from '../data/data.json'
const technology = data.technology

const NumberedIndicators = ({ currentTech: activeSlide, updateTech }) => {
  const one = activeSlide === 'Launch vehicle'
  const two = activeSlide === 'Spaceport'
  const three = activeSlide === 'Space capsule'

  return (
    <div className="flex numbered-indicators text-center lg:grid gap-4 place-content-center items-center  my-[2.125rem]">
      <button
        onClick={() => {
          updateTech(technology[0])
        }}
        aria-selected={one}
        className={`p-[1.5em] max-h-5 max-w-[20px] text-base rounded-full font-serif grid place-content-center ${
          one
            ? 'bg-white text-space'
            : 'bg-space text-white border border-translucent'
        }`}
      >
        1
      </button>
      <button
        onClick={() => {
          updateTech(technology[1])
        }}
        aria-selected={two}
        className={`p-[1.5em] max-h-5 max-w-[20px] text-base rounded-full font-serif grid place-content-center ${
          two
            ? 'bg-white text-space'
            : 'bg-space text-white border border-translucent'
        }`}
      >
        2
      </button>
      <button
        onClick={() => {
          updateTech(technology[2])
        }}
        aria-selected={three}
        className={`p-[1.5em] max-h-5 max-w-[20px] text-base rounded-full font-serif grid place-content-center ${
          three
            ? 'bg-white text-space'
            : 'bg-space text-white border border-translucent'
        }`}
      >
        3
      </button>
    </div>
  )
}

export default NumberedIndicators
