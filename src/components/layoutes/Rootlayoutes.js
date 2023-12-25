import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"
function Rootlayoutes() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Rootlayoutes