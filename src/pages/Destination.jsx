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
        <div className="grid justify-center pt-6 text-center">
          <p className="text-base uppercase font-sans_cond tracking-[0.16875rem] text-center mb-8">
            <span className="font-bold opacity-25 mr-[1.12rem]">01</span>Pick
            your destination
          </p>
          <div className="max-w-[10.625rem] mx-auto mb-[1.625rem]">
            <img src={planet} alt="" width="445" height="445" />
          </div>
          <div className="tab-list text-center justify-center flex gap-[1.63rem] sm:gap-8 mb-5">
            <button
              aria-selected={tab === 'moon' ? 'true' : 'false'}
              onClick={() => {
                setTab(`moon`)
              }}
              className={`pb-3 uppercase font-sans_cond text-accent bg-dark tracking-[0.16875rem] relative after:content-[''] after:absolute  after:h-1 after:w-full after:bottom-0 after:right-0  ${
                tab === 'moon' ? 'after:bg-white' : 'hover:after:bg-navcolor'
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
                tab === 'mars' ? 'after:bg-white' : 'hover:after:bg-navcolor'
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
                tab === 'europa' ? 'after:bg-white' : 'hover:after:bg-navcolor'
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
                tab === 'titan' ? 'after:bg-white' : 'hover:after:bg-navcolor'
              }`}
            >
              Titan
            </button>
          </div>
          <h2 className="text-h3 font-serif leading-none text-center my-4">
            MOON
          </h2>
          <p className="text-[0.9375rem] md:text-base max-w-[20.4375rem] md:max-w-[27.75rem] text-accent leading-normal mx-auto">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <div className="block w-full max-w-[20.4375rem] md:max-w-[27.75rem] h-[0.0625rem] bg-grey my-8"></div>
          <div className="grid gap-8 mb-[3.56rem]">
            <p className="grid gap-3 text-center">
              <span className="text-sh2 font-sans_cond">AVG. DISTANCE</span>
              <span className="text-sh1 font-serif">384,400 KM</span>
            </p>
            <p className="grid gap-3 text-center">
              <span className="text-sh2 font-sans_cond uppercase">
                Est. travel time
              </span>
              <span className="text-sh1 font-serif">3 DAYS</span>
            </p>
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default Destination
