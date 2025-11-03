import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Home } from './Components/home/home';
import { Cakes } from './Components/cakes/cakes';
import { About } from './Components/about/about'; 
import { Contact } from './Components/contact/contact';
import { Signup } from './Components/signup/signup';
import { Login } from './Components/login/login'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cakes" element={<Cakes/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
