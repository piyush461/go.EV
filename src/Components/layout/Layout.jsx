import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex justify-between  items-center bg-green-400 px-10 py-2">
        <div className="text-3xl font-bold">go.EV</div>
        <div className="flex gap-5 ">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/blogs">Blogs</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;