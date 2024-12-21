import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
 
  return (
    <>
      <nav className="flex justify-between py-2  items-center bg-green-400 px-10 py-4">
        <div className="text-3xl font-bold">go.EV</div>
        <div className="flex gap-5 font-bold">
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/blogs">Blogs</NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;