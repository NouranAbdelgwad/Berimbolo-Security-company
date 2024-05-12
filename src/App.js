import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Services from './Components/Services';
import ContactUs from './Components/Contact_us';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Services></Services>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </>
  )  
}

export default App;
