import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AppProvider from '../context/context'

const Home = () => {
  const backgroundImages =
    'bg-home bg-bottom bg-cover bg-no-repeat min-h-screen'

  return (
    <AppProvider>
      <div className={`${backgroundImages}`}>
        <header>
          <Navbar />
          <Sidebar />
        </header>
        <div
          className={`container grid place-items-center lg:grid-cols-2 lg:justify-between px-4 tall:pb-20 mx-auto`}
        >
          <div className="text-center lg:text-left mb-[5.06rem] md:mb-[9.75rem] lg:mb-0">
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
          </div>
          <div className="grid place-content-center mb-12 lg:mb-0 lg:self-end xl:mr-[10.125rem] lg:justify-self-end">
            <Button />
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default Home
