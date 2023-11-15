import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const NavbarItem = ({ page, ItemNum, route }) => {
  const { isSidebarOpen } = useGlobalContext()

  return (
    <li
      className={`relative after:absolute  after:h-[0.25rem] after:right-0 after:bottom-0 hover:after:bg-grey after:w-full after:transition-all after:duration-300`}
    >
      <NavLink
        tabIndex={isSidebarOpen ? 0 : -1}
        className="relative font-sans_cond tracking-wider pt-[2.44rem] pb-[2.5rem] lg:pb-[2.19rem] block before:transition-all"
        to={route}
      >
        <span
          aria-hidden="true"
          className="hidden lg:inline font-bold mr-[0.69rem]"
        >
          {ItemNum}
        </span>
        {page}
      </NavLink>
    </li>
  )
}

const SideNavItem = ({ page, ItemNum, route }) => {
  const { isSidebarOpen } = useGlobalContext()

  return (
    <li className="w-full relative mb-[1.56rem] transition-all duration-300">
      <NavLink
        tabIndex={isSidebarOpen ? 0 : -1}
        className="pt-[0.31rem] pb-[0.44rem] font-sans_cond  tracking-wider pl-8 block"
        to={route}
      >
        <span aria-hidden="true" className="font-bold mr-[0.69rem]">
          {ItemNum}
        </span>
        {page}
      </NavLink>
    </li>
  )
}
export { NavbarItem, SideNavItem }
