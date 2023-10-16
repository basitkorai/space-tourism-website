import { useGlobalContext } from '../context/context'
import { useEffect, useRef } from 'react'
import iconHamburger from '../assets/images/shared/icon-hamburger.svg'
import logo from '../assets/images/shared/logo.svg'

const Navbar = () => {
  const navToggle = useRef(null)
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()

  useEffect(() => {
    if (!isSidebarOpen) {
      navToggle.current.focus()
    }
  }, [isSidebarOpen])

  return (
    <>
      <div className="pt-6 px-6 md:pt-0 md:pl-[2.4375rem] md:pr-0 mb-6 lg:pt-9 lg:pl-[3.4375rem] lg:text-base md:mb-[6.62rem] lg:mb-[15.69rem]">
        <nav
          className="flex justify-between items-center "
          id="navbar"
          aria-labelledby="primary-navigation"
        >
          <div className="logo">
            <a href="./index.html">
              <img src={logo} alt="" width="40" height="40" />
            </a>
          </div>
          <div className="absolute z-50 hidden lg:flex ml-40 h-[0.0625rem] w-[29.5625rem] bg-grey"></div>
          <button
            onClick={() => {
              setIsSidebarOpen(true)
            }}
            className="md:hidden"
            type="button"
            aria-expanded={isSidebarOpen}
            aria-controls="sidenav"
            aria-label="toggle navbar"
            ref={navToggle}
          >
            <img
              src={iconHamburger}
              alt=""
              aria-hidden="true"
              width="24"
              height="21"
            />
          </button>
          <ul
            className="relative z-0 nav-list hidden md:flex bg-navcolor backdrop-blur-spaceblur min-w-[58.59%] w-[60%] max-w-[65%] gap-[2.31rem] justify-center text-[0.875rem] lg:text-base"
            id="nav-list"
          >
            <li className="relative after:content-['']  after:absolute after:bg-white after:w-full after:h-[0.25rem] after:right-0 after:bottom-0">
              <a
                tabIndex={isSidebarOpen ? 0 : -1}
                className="font-sans_cond tracking-wider pt-[2.44rem] pb-[2.5rem] lg:pb-[2.19rem] block"
                href="#"
              >
                <span
                  aria-hidden="true"
                  className="hidden lg:inline font-bold mr-[0.69rem]"
                >
                  00
                </span>
                HOME
              </a>
            </li>
            <li className="relative after:content-['']  after:absolute hover:after:bg-grey after:w-full after:h-[0.25rem] after:right-0 after:bottom-0">
              <a
                tabIndex={isSidebarOpen ? 0 : -1}
                className="font-sans_cond tracking-wider pt-[2.44rem] pb-[2.5rem] lg:pb-[2.19rem] block"
                href="#"
              >
                <span
                  aria-hidden="true"
                  className="hidden lg:inline font-bold mr-[0.69rem]"
                >
                  01
                </span>
                DESTINATION
              </a>
            </li>
            <li className="relative after:content-['']  after:absolute hover:after:bg-grey after:w-full after:h-[0.25rem] after:right-0 after:bottom-0">
              <a
                tabIndex={isSidebarOpen ? 0 : -1}
                className="font-sans_cond tracking-wider pt-[2.44rem] pb-[2.5rem] lg:pb-[2.19rem] block"
                href="#"
              >
                <span
                  aria-hidden="true"
                  className="hidden lg:inline font-bold mr-[0.69rem]"
                >
                  02
                </span>
                CREW
              </a>
            </li>
            <li className="relative after:content-['']  after:absolute hover:after:bg-grey after:w-full after:h-[0.25rem] after:right-0 after:bottom-0">
              <a
                tabIndex={isSidebarOpen ? 0 : -1}
                className="font-sans_cond tracking-wider pt-[2.44rem] pb-[2.5rem] lg:pb-[2.19rem] block"
                href="#"
              >
                <span
                  aria-hidden="true"
                  className="hidden lg:inline font-bold mr-[0.69rem]"
                >
                  03
                </span>
                TECHNOLOGY
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default Navbar
