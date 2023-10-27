import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AppProvider, { useGlobalContext } from '../context/context'
import backgroundImages from '../utils/backgroundImages'
import RoundIndicators from '../components/RoundIndicators'

const Crew = () => {
  const {
    crew: { name, role, bio },
    setCrew,
  } = useGlobalContext()

  const isCrew1 = name === `Douglas Hurley`
  const isCrew2 = name === `Mark Shuttleworth`
  const isCrew3 = name === `Victor Glover`
  const isCrew4 = name === `Anousheh Ansari`

  return (
    <AppProvider>
      <div className={`bg-crew ${backgroundImages}`}>
        <header>
          <Navbar />
          <Sidebar />
        </header>
        <div className="container text-center lg:text-left mb-[5.06rem] md:mb-0 mt-6 md:mt-10 lg:mt-[4.75rem] mx-auto border border-transparent border-solid">
          <p className="lg:hidden md:pl-[2.375rem] lg:pl-[3.47rem] text-base md:text-xl lg:text-[1.75rem] uppercase font-sans_cond tracking-[0.16875rem] text-center md:text-left mb-8 md:mb-[3.75rem] lg:mb-[6.0625rem]">
            <span className="font-bold opacity-25 mr-[1.12rem]">02</span>
            Meet your crew
          </p>
          <div className="grid lg:grid-cols-2 place-content-center text-left">
            <div className="md:order-last">
              <div
                className={`lg:w-[28.34rem] min-h-[24rem] md:min-h-[33.25rem] lg:min-h-full mx-auto lg:mt-0 grid justify-items-center border-b border-navcolor md:border-transparent max-w-[20.4375rem] md:max-w-[27.75rem] lg:h-[105.2%] bg-no-repeat bg-bottom bg-contain ${
                  isCrew1
                    ? 'crew1'
                    : isCrew2
                    ? 'crew2'
                    : isCrew3
                    ? 'crew3'
                    : isCrew4
                    ? 'crew4'
                    : 'crew1'
                }`}
              ></div>
            </div>
            <RoundIndicators
              hideOn={'lg:hidden'}
              updateCrew={setCrew}
              currentCrew={name}
            />
            <div className="md:order-first grid justify-center lg:mb-[5.87]">
              <div>
                <p className="hidden lg:block md:pl-[2.375rem] lg:pl-0 text-base md:text-xl lg:text-[1.75rem] uppercase font-sans_cond tracking-[0.16875rem] text-center lg:text-left mb-8 md:mb-[3.75rem] lg:mb-[9.63rem]">
                  <span className="font-bold opacity-25 mr-[1.12rem]">02</span>
                  Meet your crew
                </p>
                <p className="grid gap-2 lg:gap-[0.94rem] mb-4 md:mb-[1.75rem] lg:mb-[1.69rem] max-w-[20.4375rem] md:max-w-[27.75rem] lg:max-w-full pt-8 md:pt-0 mt-8 md:mt-0 mx-auto uppercase text-center lg:text-left font-serif tracking-normal leading-none">
                  <span className="text-sh2 md:text-[1.5rem] opacity-50">
                    {role}
                  </span>
                  <span className="text-sh1 md:text-[2.5rem]">{name}</span>
                </p>
                <p className="max-lg:mx-auto text-center lg:text-left text-[0.9375rem] md:text-base max-w-[20.4375rem] md:max-w-[27.75rem] leading-normal md:leading-7">
                  {bio}
                </p>
                <RoundIndicators
                  hideOn={'hidden lg:flex'}
                  updateCrew={setCrew}
                  currentCrew={name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default Crew
