//import logo from './logo.svg';
//import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

//export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import Products from './components/Products/Products';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './App.css'; // Глобални стилове
import OrderForm from './components/OrderForm/OrderForm';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <GeneralInfo />
                <Products />
                <OrderForm />
                <FAQ />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
