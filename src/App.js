import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./components/Home"
import Brend from "./components/pages/Brend/Brend"
import Rootlayoutes from "./components/layoutes/Rootlayoutes"
import AboutUse from "./components/pages/AboutUse/AboutUse"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Rootlayoutes />}>
      <Route index element={<Home />} />
      <Route path="brend" element={<Brend />} />
      <Route path="use" element={<AboutUse/>} />
    </Route>
  ))

  return (
    <div className="appjsx">
      <RouterProvider router={router} />
    </div>
  )
}

export default App