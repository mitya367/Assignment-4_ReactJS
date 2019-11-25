import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './App.css';


export default function App(){
    return(
    <div ClassName="App">
        <Header />
        <div class="box">
            <Main />
            <Nav />
        </div>
        <Footer />
    </div>
    );
}