const Tabs = () => {
  return (
    <div class="tab-list text-center flex gap-8 items-center">
      <button
        aria-selected="true"
        class="pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:content-[''] after:absolute after:bg-white after:h-1 after:w-full after:bottom-0 after:right-0"
      >
        Moon
      </button>
      <button
        aria-selected="true"
        class="pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:content-[''] after:absolute hover:after:bg-translucent after:h-1 after:w-full after:bottom-0 after:right-0"
      >
        Mars
      </button>
      <button
        aria-selected="true"
        class="pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:content-[''] after:absolute hover:after:bg-translucent after:h-1 after:w-full after:bottom-0 after:right-0"
      >
        Europa
      </button>
    </div>
  )
}

export default Tabs
