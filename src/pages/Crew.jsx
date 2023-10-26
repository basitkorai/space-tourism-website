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
        <div className="text-center lg:text-left mb-[5.06rem] md:mb-[9.75rem] lg:mb-0 pt-6">
          <p className="md:pl-[2.375rem] lg:pl-[3.47rem] text-base md:text-xl lg:text-[1.75rem] uppercase font-sans_cond tracking-[0.16875rem] text-center md:text-left mb-8 md:mb-[3.75rem] lg:mb-[6.0625rem]">
            <span className="font-bold opacity-25 mr-[1.12rem]">02</span>
            Meet your crew
          </p>
          <div className="mx-auto my-8 grid justify-items-center border-b border-navcolor max-w-[20.4375rem] md:max-w-[27.75rem] lg:max-w-full">
            <img
              className="max-w-[10.625rem] md:max-w-[18.75rem] lg:max-w-[27.8125rem] "
              src={crew1}
              alt=""
              width="445"
              height="445"
            />
          </div>
          <RoundIndicators />
          <p className="grid lg:flex gap-2 lg:gap-[4.94rem] text-[] mb-4 md:mb-[1.75rem] max-w-[20.4375rem] md:max-w-[27.75rem] lg:max-w-full pt-8 mt-8 md:mt-[3.02rem] lg:mt-[3.37rem] mx-auto uppercase font-serif tracking-normal">
            <span className="text-sh2 opacity-50">Commander</span>
            <span className="text-sh1">Douglas Hurley</span>
          </p>
          <p className="mx-auto text-[0.9375rem] md:text-base max-w-[20.4375rem] md:max-w-[27.75rem] text-accent leading-normal">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </AppProvider>
  )
}

export default Crew
