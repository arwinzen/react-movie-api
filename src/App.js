import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/home';
import Details from './containers/Details/details';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
