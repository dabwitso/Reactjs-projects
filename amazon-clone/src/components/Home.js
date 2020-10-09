import React from 'react'
import '../styles/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={require("../assets/amazon_background_image.jpg")} alt=""/>
                <div className="home__row">
                    <Product/>
                </div>

                <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>
                
                <div className="home__row">
                    {/* Product */}
                </div>
            </div>
        </div>
    )
}

export default Home;
