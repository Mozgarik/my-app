import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage/HomePage';
import Proklatie from './Pages/Proklatie/Proklatie';
import Circ from './Pages/Circ/Circ';
import Povorot from './Pages/Povorot/Povorot';
import Pika from './Pages/Pika/Pika';

function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proklyatie" element={<Proklatie />} />
            <Route path="/circ" element={<Circ />} />
            <Route path="/povorot" element={<Povorot />} />
            <Route path="/pikova" element={<Pika />} />
          </Routes>
      </div>
    </Router>
  )
}
 
export default App;