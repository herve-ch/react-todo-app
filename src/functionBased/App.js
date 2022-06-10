import TodoContainer from './components/TodoContainer';
import About from './components/About';
import NotMatch from './components/NotMatch';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="inner">

          <Routes>
            <Route path="/" element={<TodoContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;