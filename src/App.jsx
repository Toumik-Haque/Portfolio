import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hero from "./Hero"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App