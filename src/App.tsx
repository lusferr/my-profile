import './App.css'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
import { Home } from './pages/home'

function App() {
  return (
    <div className='h-full bg-primary-800 font-Inter'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
