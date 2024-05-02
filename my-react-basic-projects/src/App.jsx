import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import CurrencyConveter from "./Projects/CurrencyConveter"
import PasswordGenrator from "./Projects/PasswordGenrator"
import ShowCaseWebsite from "./Projects/ShowCaseWebsite"

function App() {

  return (
   <>
  {/* <PasswordGenrator/> */}
  {/* <CurrencyConveter/> */}
  <Router>
    <Routes>
      <Route path="*" element={<h1>page not found</h1>}/>
      <Route path="/" element={<ShowCaseWebsite/>}/>
      <Route path="passGen"  element={<PasswordGenrator/>}/>
      <Route path="CurrencyConverter"  element={<CurrencyConveter/>}/>
    </Routes>
  </Router>
   {/* <ShowCaseWebsite/> */}
   </>
  )
}

export default App
