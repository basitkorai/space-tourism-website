import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AppProvider, { useGlobalContext } from '../context/context'
import backgroundImages from '../utils/backgroundImages'
import planet from '../assets/images/destination/image-moon.png'

const Destination = () => {
  const { tab, setTab } = useGlobalContext()
  return (
    <AppProvider>
      <div className={`bg-destination ${backgroundImages}`}>
        <header>
          <Navbar />
          <Sidebar />
        </header>
        <div className="container grid lg:grid-cols-2 pt-6 text-center w-full mx-auto">
          <div>
            <p className="md:pl-[2.375rem] lg:pl-[3.47rem] text-base md:text-xl lg:text-[1.75rem] uppercase font-sans_cond tracking-[0.16875rem] text-center md:text-left mb-8 md:mb-[3.75rem] lg:mb-[6.0625rem]">
              <span className="font-bold opacity-25 mr-[1.12rem]">01</span>
              Pick your destination
            </p>
            <div className="max-w-[10.625rem] md:max-w-[18.75rem] lg:max-w-[27.8125rem] mx-auto mb-[1.625rem] md:mb-[3.3125rem] lg:grid justify-items-center">
              <img src={planet} alt="" width="445" height="445" />
            </div>
          </div>
          <div className="grid justify-center lg:justify-start  items-center text-center lg:text-left">
            <div className="max-w-[27.8125rem]">
              <div className="tab-list flex justify-center lg:justify-start gap-[1.63rem] sm:gap-8 md:gap-[2.19rem] mb-5 md:mb-8 lg:mb-[2.31rem] items-center">
                <button
                  aria-selected={tab === 'moon' ? 'true' : 'false'}
                  onClick={() => {
                    setTab(`moon`)
                  }}
                  className={`pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:content-[''] after:absolute after:h-1 after:w-full after:bottom-0 after:right-0 ${
                    tab === 'moon'
                      ? 'after:bg-white'
                      : 'hover:after:bg-navcolor'
                  }`}
                >
                  Moon
                </button>
                <button
                  aria-selected={tab === 'mars' ? 'true' : 'false'}
                  onClick={() => {
                    setTab(`mars`)
                  }}
                  className={`pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:content-[''] after:absolute  after:h-1 after:w-full after:bottom-0 after:right-0 ${
                    tab === 'mars'
                      ? 'after:bg-white'
                      : 'hover:after:bg-navcolor'
                  }`}
                >
                  Mars
                </button>
                <button
                  aria-selected={tab === 'europa' ? 'true' : 'false'}
                  onClick={() => {
                    setTab(`europa`)
                  }}
                  className={`pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:content-[''] after:absolute  after:h-1 after:w-full after:bottom-0 after:right-0 ${
                    tab === 'europa'
                      ? 'after:bg-white'
                      : 'hover:after:bg-navcolor'
                  }`}
                >
                  Europa
                </button>
                <button
                  aria-selected={tab === 'titan' ? 'true' : 'false'}
                  onClick={() => {
                    setTab(`titan`)
                  }}
                  className={`pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:content-[''] after:absolute  after:h-1 after:w-full after:bottom-0 after:right-0 ${
                    tab === 'titan'
                      ? 'after:bg-white'
                      : 'hover:after:bg-navcolor'
                  }`}
                >
                  Titan
                </button>
              </div>
              <h2 className="text-h3 md:text-[5rem] lg:text-[6.25rem] font-serif leading-none my-4 md:my-0 lg:mb-[0.88rem]">
                MOON
              </h2>
              <p className="text-[0.9375rem] md:text-base max-w-[20.4375rem] md:max-w-[35.8125rem] text-accent leading-normal lg:leading-8 mx-auto">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className="grid lg:flex gap-8 lg:gap-[4.94rem] mb-[3.56rem] md:mb-[1.75rem] max-w-[20.4375rem] md:max-w-[27.75rem] lg:max-w-full pt-8 mt-8 md:mt-[3.02rem] lg:mt-[3.37rem] border-t-[0.0625rem] border-grey border-dash max-md:mx-auto">
                <p className="flex flex-col">
                  <span className="text-sh2 font-sans_cond text-accent">
                    AVG. DISTANCE
                  </span>
                  <span className="text-sh1 font-serif">384,400 KM</span>
                </p>
                <p className="flex flex-col">
                  <span className="text-sh2 font-sans_cond uppercase text-accent">
                    Est. travel time
                  </span>
                  <span className="text-sh1 font-serif">3 DAYS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default Destination
