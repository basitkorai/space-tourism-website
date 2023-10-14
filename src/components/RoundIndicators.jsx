const RoundIndicators = () => {
  return (
    <div className="round-indicators text-center flex gap-8 justify-center items-center">
      <button
        aria-selected="true"
        class="pb-4  bg-white aspect-square rounded-full"
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
