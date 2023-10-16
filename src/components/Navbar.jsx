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
      <div className="pt-6 px-6 mb-6">
        <nav
          className="nav navbar flex justify-between"
          id="navbar"
          aria-labelledby="primary-navigation"
        >
          <div className="header__logo-container logo">
            <a href="./index.html">
              <img src={logo} alt="" width="40" height="40" />
            </a>
          </div>
          <button
            onClick={() => {
              setIsSidebarOpen(true)
            }}
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
          <ul className="nav nav-list hidden" id="nav-list">
            <li className="nav-item">
              <a tabIndex={isSidebarOpen ? -1 : 0} href="" className="nav-link">
                Collections
              </a>
            </li>
            <li className="nav-item">
              <a tabIndex={isSidebarOpen ? -1 : 0} href="" className="nav-link">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a tabIndex={isSidebarOpen ? -1 : 0} href="" className="nav-link">
                Women
              </a>
            </li>
            <li className="nav-item about">
              <a tabIndex={isSidebarOpen ? -1 : 0} href="" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item contact">
              <a tabIndex={isSidebarOpen ? -1 : 0} href="" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default Navbar
