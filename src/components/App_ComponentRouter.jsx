import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

      

      <BrowserRouter>

        {/* This is our custom navbar! */}
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
