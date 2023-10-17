import { useGlobalContext } from '../context/context'
import { useEffect, useRef } from 'react'
import iconClose from '../assets/images/shared/icon-close.svg'
import { SideNavItem } from './NavListItem'

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
        <SideNavItem page="HOME" ItemNum="00" route="/" />
        <SideNavItem page="DESTINATION" ItemNum="01" route="/destination" />
        <SideNavItem page="CREW" ItemNum="02" route="/crew" />
        <SideNavItem page="TECHNOLOGY" ItemNum="03" route="/technology" />
      </ul>
    </nav>
  )
}
export default Sidebar
