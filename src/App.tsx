import './App.css'
import Canvas from './components/Canvas'
import Inspector from './components/Inspector'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      <Canvas />
      <Inspector />
    </div>
  )
}

export default App
