const RoundIndicators = ({ hideOn }) => {
  return (
    <div
      className={`round-indicators text-center flex gap-4 justify-center lg:justify-start items-center my-8 md:my-10 lg:mt-[7.5rem] ${hideOn}`}
    >
      <button
        aria-selected="true"
        class="pb-4 bg-white aspect-square rounded-full"
      ></button>
      <button
        aria-selected="true"
        class="pb-4 hover:bg-translucent bg-grey aspect-square rounded-full"
      ></button>
      <button
        aria-selected="true"
        class="pb-4 hover:bg-translucent bg-grey aspect-square rounded-full"
      ></button>
      <button
        aria-selected="true"
        class="pb-4 hover:bg-translucent bg-grey aspect-square rounded-full"
      ></button>
    </div>
  )
}

export default RoundIndicators
