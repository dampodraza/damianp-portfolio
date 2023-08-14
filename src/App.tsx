import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";


function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
