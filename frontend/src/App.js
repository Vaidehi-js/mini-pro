import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Plugin from './components/Plugin';
import Home from './components/Home';



function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route element = {< Home/>} path = "Home"/>
        <Route element = {< Login/>} path = "Login"/>
        <Route element = {< Register/>} path ="register" />
        <Route element= {< Dashboard/>} path = "dashboard" />
        <Route element={< Plugin/>} path = "plugin" />

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
