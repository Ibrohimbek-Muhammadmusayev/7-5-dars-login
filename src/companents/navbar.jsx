import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
    <header>
      <nav className="max-w-[100%] h-[100px] bg-[#f5ebe0]">
        <div className="m-auto flex pl-[30px] pr-[30px] bg-[#f5ebe0] max-w-[100%] h-[100px] justify-between items-center">
          <h1>LOGO</h1>
          <ul className="flex gap-[30px] text-center items-center">
              <NavLink><li>Top</li></NavLink>
              <NavLink><li>Shop</li></NavLink>
              <NavLink><li>Storage korzinka</li></NavLink>
          </ul>
          <button>store</button>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar