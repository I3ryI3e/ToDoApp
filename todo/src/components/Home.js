import React from 'react';
import "../css/Home.css"
import addToDoItem from "./addToDoItem"

const Home = () => {
    return (
        <div className="home">
            <div className="home__title">
                <h2 className="home__title__title">TO DO APP</h2>
            </div>
            <div className="home__addToDoItem">
                <addToDoItem/>
            </div>
        </div>


    );
};

export default Home;