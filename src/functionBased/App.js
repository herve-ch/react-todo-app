import TodoContainer from './components/TodoContainer';
import About from './components/About';
import NotMatch from './components/NotMatch';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;