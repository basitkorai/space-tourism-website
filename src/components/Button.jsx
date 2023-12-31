import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link
      className="grid place-content-center bg-white text-space font-serif px-[2em] aspect-square relative z-10 max-w-[9.375rem] max-h-[9.375rem] md:max-w-[17.125rem] md:max-h-[17.125rem] rounded-full min-w-[100px] text-[length:clamp(14px,10vw-1rem,1rem)] sm:text-xl md:text-h4 after:content-[''] after:top-0 after:right-0 after:bg-navcolor after:absolute after:h-full after:w-full after:-z-10 after:rounded-full after:transition-all after:opacity-0 hover:after:opacity-100 tall:hover:after:scale-[1.4] hover:after:scale-150"
      to="/destination"
    >
      EXPLORE
    </Link>
  )
}

export default Button
