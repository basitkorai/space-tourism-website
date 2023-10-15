import Button from '../components/Button'

const Home = () => {
  const backgroundImages = 'bg-homemobile md:bg-hometablet lg:bg-homedesktop'

  return (
    <div
      className={`container grid place-content-center px-4 ${backgroundImages}`}
    >
      <section>
        <div className="text-center mb-[5.02rem]">
          <h1 className="">
            <span className="font-sans_cond text-base text-accent">
              SO, YOU WANT TO TRAVEL TO
            </span>
            <span className="text-[5rem] mt-4 block font-serif">SPACE</span>
          </h1>
          <p className="text-[0.9375rem] max-w-[20.4375rem] text-center text-accent">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="grid place-content-center">
          <Button />
        </div>
      </section>
    </div>
  )
}

export default Home
