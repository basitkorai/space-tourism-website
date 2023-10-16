import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const backgroundImages = 'bg-home bg-bottom bg-cover bg-no-repeat'

  return (
    <div className={`${backgroundImages}`}>
      <Navbar />
      <Sidebar />
      <div className={`container grid place-items-center min-h-screen px-4`}>
        <section>
          <div className="text-center mb-[5.06rem]">
            <h1 className="grid gap-4">
              <span className="font-sans_cond text-base text-accent leading-none">
                SO, YOU WANT TO TRAVEL TO
              </span>
              <span className="text-[5rem] block font-serif">SPACE</span>
            </h1>
            <p className="text-[0.9375rem] max-w-[20.4375rem] text-center text-accent">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="grid place-content-center">
            <Button />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
