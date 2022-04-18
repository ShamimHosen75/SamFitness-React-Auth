import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import NotFound from './Components/Pages/NotFound/NotFound';
import OurServices from './Components/Pages/OurServices/OurServices';
import Register from './Components/Pages/Register/Register';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Welldone from './Components/Pages/Welldone/Welldone';
import Footer from './Components/Sheared/Footer/Footer';
import NavBar from './Components/Sheared/NavBar/NavBar';
// import PrivateRoute from './Components/Sheared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      {/* <Fragment> */}
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/services" element={<OurServices />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/ServiceDetails/:serviceID" element={<ServiceDetails />}/>
          <Route path="/welldone" element={<Welldone />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
        <Footer></Footer>
      {/* </Fragment> */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
