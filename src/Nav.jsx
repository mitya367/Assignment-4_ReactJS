//import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import 'axios';
import './Nav.css'; 
import Axios from 'axios';

// api key 2963bd57c0e641d19b9931ddd2391de3

const Nav = () => {
    const [newList, setNewsList] = useState([]);

    setTimeout(() => {
        Axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=2963bd57c0e641d19b9931ddd2391de3').then((resp) => {
            let articles = [];
            articles = resp.data.articles;
            setNewsList(articles);
        }).catch((err) =>{
            alert(err);
        })
    }, 5000)
    
    return (
        <div className="nav">
            <nav className="navbar"><a Class="link1" href="#"><strong>Home Page</strong></a></nav>
            <ul>
                {newList.map(function(listValue){
                    return  <li>{listValue.title}</li>
                })}
            </ul>
        </div>
    )
}

export default Nav;