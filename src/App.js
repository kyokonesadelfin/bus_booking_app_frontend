import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar/Navbar";
import React from 'react';
import Register from "./pages/register/Register";
import Logout from "./pages/logout/Logout";
import SeatSelection from "./pages/seat/SeatSelection";
import Payments from "./pages/payments/Payments";
import Profile from "./pages/profile/Profile";
import BusPage from "./pages/list/BusPage";
import DestList from "./components/destinationsList/DestList"
import FeaturedRoutes from "./components/featuredRoutes/FeaturedRoutes"
import Discounts from "./components/discounts/Discounts"
import Thank from "./pages/Thank";
import Contact from "./pages/Contact";


function App() {

  return (
   <>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/seat" element={<SeatSelection/>}/>
        <Route path="/seat/:id" element={<BusPage/>}/>
        <Route path="/payment" element={<Payments/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/destlist" element={<DestList/>}/>
        <Route path="/featureroutes" element={<FeaturedRoutes/>}/>
        <Route path="/discount" element={<Discounts/>}/>
        <Route path="/thank" element={<Thank/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </>
  );
}

export default App;









