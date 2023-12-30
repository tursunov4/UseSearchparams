

// export default App
import {Routes , Route} from "react-router-dom"
import Home from './Home'
const App = () => {
  return (
     <Routes>
      <Route element={<Home/>} path="/" />
     </Routes>
  )
}

export default App
