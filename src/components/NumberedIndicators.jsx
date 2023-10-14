const NumberedIndicators = () => {
  return (
    <div className="numbered-indicators text-center grid gap-8 place-content-center">
      <button
        aria-selected="true"
        class="px-10 bg-white text-h4 aspect-square rounded-full font-serif text-space max-h-20 grid place-content-center"
      >
        1
      </button>
      <button
        aria-selected="true"
        class="px-10 bg-space text-h4 aspect-square rounded-full font-serif text-white max-h-20 grid place-content-center border border-translucent hover:border-white"
      >
        2
      </button>
      <button
        aria-selected="true"
        class="px-10 bg-space text-h4 aspect-square rounded-full font-serif text-white max-h-20 grid place-content-center border border-translucent hover:border-white"
      >
        3
      </button>
    </div>
  )
}

export default NumberedIndicators
