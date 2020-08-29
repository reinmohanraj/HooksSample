import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './main_component/Header'
import Icon from '@material-ui/core/Icon';
import Footer from './main_component/Footer';
import Sidebarnav from './main_component/Sidebarnav'
import Appointment from './Secction_Component/Appointment';

function App() {
  return (
   <div>
    <Header />
    <Sidebarnav />
    <Appointment />
    <Footer />
   </div>
 
  );
}

export default App;