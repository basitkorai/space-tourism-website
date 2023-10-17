import { useGlobalContext } from '../context/context'
import { useEffect, useRef } from 'react'
import iconClose from '../assets/images/shared/icon-close.svg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const closeSidebarBtn = useRef(null)
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
  useEffect(() => {
    if (isSidebarOpen) {
      closeSidebarBtn.current.focus()
    }
  }, [isSidebarOpen])

  return (
    <nav className="md:hidden" role="navigation" id="">
      <ul
        className={`bg-navcolor backdrop-blur-spaceblur fixed top-0 right-0 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } w-[70%] h-screen z-50 transition-transform`}
        id="sidenav"
      >
        <div className="grid justify-end pt-[1.62rem] pb-[3.56rem] pr-[1.15rem] text-base">
          <button
            ref={closeSidebarBtn}
            tabIndex={isSidebarOpen ? 0 : -1}
            className="btn-close xside py-2 px-[0.55rem] rounded-full"
            onClick={() => {
              setIsSidebarOpen(false)
            }}
            aria-label="close sidebar"
          >
            <img src={iconClose} alt="" width="20" height="20" />
          </button>
        </div>
        <li className="w-full relative after:content-['']  after:absolute after:bg-white after:h-full after:w-[0.25rem] after:right-0 after:top-0 mb-[1.56rem]">
          <Link
            tabIndex={isSidebarOpen ? 0 : -1}
            className="pt-[0.31rem] pb-[0.44rem] font-sans_cond  tracking-wider pl-8 block"
            to="/"
          >
            <span aria-hidden="true" className="font-bold mr-[0.69rem]">
              00
            </span>
            HOME
          </Link>
        </li>
        <li className="w-full relative after:content-['']  after:absolute hover:after:bg-grey after:h-full after:w-[0.25rem] after:right-0 after:top-0 mb-[1.56rem]">
          <Link
            tabIndex={isSidebarOpen ? 0 : -1}
            className="pt-[0.31rem] pb-[0.44rem] font-sans_cond  tracking-wider pl-8 block"
            to="/destination"
          >
            <span aria-hidden="true" className="font-bold mr-[0.69rem]">
              01
            </span>
            DESTINATION
          </Link>
        </li>
        <li className="w-full relative after:content-['']  after:absolute hover:after:bg-grey after:h-full after:w-[0.25rem] after:right-0 after:top-0 mb-[1.56rem]">
          <Link
            tabIndex={isSidebarOpen ? 0 : -1}
            className="pt-[0.31rem] pb-[0.44rem] font-sans_cond  tracking-wider pl-8 block"
            to="/crew"
          >
            <span aria-hidden="true" className="font-bold mr-[0.69rem]">
              02
            </span>
            CREW
          </Link>
        </li>
        <li className="w-full relative after:content-['']  after:absolute hover:after:bg-grey after:h-full after:w-[0.25rem] after:right-0 after:top-0 mb-[1.56rem]">
          <Link
            tabIndex={isSidebarOpen ? 0 : -1}
            className="pt-[0.31rem] pb-[0.44rem] font-sans_cond  tracking-wider pl-8 block"
            to="/technology"
          >
            <span aria-hidden="true" className="font-bold mr-[0.69rem]">
              03
            </span>
            TECHNOLOGY
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Sidebar
