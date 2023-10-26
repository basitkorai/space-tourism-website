import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AppProvider from '../context/context'
import backgroundImages from '../utils/backgroundImages'
import crew1 from '../assets/images/crew/image-douglas-hurley.png'
import RoundIndicators from '../components/RoundIndicators'

const Crew = () => {
  return (
    <AppProvider>
      <div className={`bg-crew ${backgroundImages}`}>
        <header>
          <Navbar />
          <Sidebar />
        </header>
        <div className="container text-center lg:text-left mb-[5.06rem] md:mb-0 pt-6 lg:pt-[3.88rem] mx-auto">
          <p className="lg:hidden md:pl-[2.375rem] lg:pl-[3.47rem] text-base md:text-xl lg:text-[1.75rem] uppercase font-sans_cond tracking-[0.16875rem] text-center md:text-left mb-8 md:mb-[3.75rem] lg:mb-[6.0625rem]">
            <span className="font-bold opacity-25 mr-[1.12rem]">02</span>
            Meet your crew
          </p>
          <div className="grid lg:grid-cols-2 place-content-center text-left">
            <div className="md:order-last">
              <div className="mx-auto mt-8 lg:mt-0 grid justify-items-center border-b border-navcolor md:border-transparent max-w-[20.4375rem] md:max-w-[27.75rem] lg:max-w-full">
                <img
                  className="max-w-[13.875rem] md:max-w-[28.52325rem] lg:max-w-[35.5045rem] "
                  src={crew1}
                  alt=""
                  width="510"
                  height="550"
                />
              </div>
            </div>
            <RoundIndicators hideOn={'lg:hidden'} />
            <div className="md:order-first grid justify-center">
              <div>
                <p className="hidden lg:block md:pl-[2.375rem] lg:pl-0 text-base md:text-xl lg:text-[1.75rem] uppercase font-sans_cond tracking-[0.16875rem] text-center lg:text-left mb-8 md:mb-[3.75rem] lg:mb-[9.63rem]">
                  <span className="font-bold opacity-25 mr-[1.12rem]">02</span>
                  Meet your crew
                </p>
                <p className="grid gap-2 lg:gap-[0.94rem] mb-4 md:mb-[1.75rem] lg:mb-[1.69rem] max-w-[20.4375rem] md:max-w-[27.75rem] lg:max-w-full pt-8 md:pt-0 mt-8 md:mt-0 mx-auto uppercase text-center lg:text-left font-serif tracking-normal leading-none">
                  <span className="text-sh2 md:text-[1.5rem] opacity-50">
                    Commander
                  </span>
                  <span className="text-sh1 md:text-[2.5rem]">
                    Douglas Hurley
                  </span>
                </p>
                <p className="max-lg:mx-auto text-center lg:text-left text-[0.9375rem] md:text-base max-w-[20.4375rem] md:max-w-[27.75rem] leading-normal md:leading-7">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
                <RoundIndicators hideOn={'hidden lg:flex'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default Crew
