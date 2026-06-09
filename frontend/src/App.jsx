import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import { Routes, Route } from 'react-router-dom' 
import NavBar from './components/NavBar'

// function App() {
//   return (
//   <>
//     <Text cup_coffee="latte" cup_size="large" cup_color="brown" />
//     <Message condition="haal" />
//     <Message  />
//   </>
//   )
// }

// function Text({cup_coffee, cup_size, cup_color}) {
//   return(
//     <div>
//       <p>mai bola mujhe chahiye ek {cup_coffee} with color {cup_color} and size {cup_size}</p>
//     </div>
//   )
// }

// function Message({condition = "sawal"}) {
//   return(
//     <div>
//       <p>mai pucha {condition}</p>
//     </div>
//   )
// }
  
////////////////////
// function App() {
//   return (
//   <>  
//     <Home />
//   </>
//   )
// }
//////////////////

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
    
  )
}

export default App
