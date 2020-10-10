import React from 'react'
import '../styles/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={require("../assets/amazon_background_image.jpg")} alt=""/>
                <div className="home__row">
                    <Product 
                    id="8103550"
                    title="The lean startup"
                    price="29.99"
                    image={require("../assets/lean_startup.jpg")}
                    rating={5}
                    />
                    <Product 
                    id="1403250"
                    title="The lean startup"
                    price="29.99"
                    image={require("../assets/lean_startup.jpg")}
                    rating={1}
                    />

                </div>

                <div className="home__row">
                    <Product 
                    id="3913550"
                    title="The lean startup"
                    price="29.99"
                    image={require("../assets/lean_startup.jpg")}
                    rating={2}
                    />
                    <Product 
                    id="7203550"
                    title="The lean startup"
                    price="29.99"
                    image={require("../assets/lean_startup.jpg")}
                    rating={4}
                    />
                    <Product 
                    id="2903350"
                    title="The lean startup"
                    price="29.99"
                    image={require("../assets/lean_startup.jpg")}
                    rating={1}
                    />
                </div>
                
                <div className="home__row">
                    <Product 
                    id="1953570"
                    title="The lean startup"
                    price="29.99"
                    image={require("../assets/lean_startup.jpg")}
                    rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
