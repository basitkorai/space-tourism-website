import { useGlobalContext } from '../context/context'
import { useEffect, useRef } from 'react'
import iconHamburger from '../assets/images/shared/icon-hamburger.svg'
import logo from '../assets/images/shared/logo.svg'
import { Link } from 'react-router-dom'
import { NavbarItem } from './NavListItem'

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
      <div className="pt-6 px-6 md:pt-0 md:pl-[2.4375rem] md:pr-0 lg:pt-9 lg:pl-[3.4375rem] lg:text-base">
        <nav
          className="flex justify-between items-center "
          id="navbar"
          aria-labelledby="primary-navigation"
        >
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" width="40" height="40" />
            </Link>
          </div>
          <div className="absolute z-50 hidden 2xl:flex ml-40 h-[0.0625rem] w-[29.5625rem] bg-grey"></div>
          <button
            onClick={() => {
              setIsSidebarOpen(true)
            }}
            className="md:hidden rounded-full ring-white focus:ring-2 focus:p-2 focus:px-3 transition-all"
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
            <NavbarItem page="HOME" ItemNum="00" route="/" />
            <NavbarItem page="DESTINATION" ItemNum="01" route="/destination" />
            <NavbarItem page="CREW" ItemNum="02" route="/crew" />
            <NavbarItem page="TECHNOLOGY" ItemNum="03" route="/technology" />
          </ul>
        </nav>
      </div>
    </>
  )
}
export default Navbar
