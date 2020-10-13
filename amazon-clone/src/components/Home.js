import React from 'react'
import '../styles/Home.css';
import Product from './Product';
import CarouselComp from "./Carousel";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <CarouselComp/>
                
                <div className="home__row">
                    <Product 
                    id="8103550"
                    title="Eloquent JavaScript, 3rd Edition: A modern Introduction to Programming"
                    price={2100}
                    image={require("../assets/javascript.jpg")}
                    rating={5}
                    />
                    <Product 
                    id="1403250"
                    title="New Apple iPad (10.2-inch, Wi-fi, 32GB) - Space gray (Latest Model, 8th Generation"
                    price={34000}
                    image={require("../assets/ipad.jpg")}
                    rating={5}
                    />

                </div>

                <div className="home__row">
                    <Product 
                    id="3913550"
                    title="Robot Vaccuum, dser 23T 2200Pa Robotic Vacuum Cleaner, Wi-Fi connected, 2 Boundary strips"
                    price={20500}
                    image={require("../assets/rumba.jpg")}
                    rating={4}
                    />
                    <Product 
                    id="7203550"
                    title="Portable Playard, Sturdy Play Yard with Comfortable Mattress and Changing Station (Blue&Green"
                    price={68000}
                    image={require("../assets/crib.jpg")}
                    rating={3}
                    />
                    <Product 
                    id="2903350"
                    title="PlayStation 5 (CFI-1000A01), 2020"
                    price={58000}
                    image={require("../assets/playstation.jpg")}
                    rating={0}
                    />
                </div>
                
                <div className="home__row">
                    <Product 
                    id="1953570"
                    title="Hisense 55V 4K Tuner Built-in LCD TV with Regza Engine Neo Plus HDR"
                    price={37600}
                    image={require("../assets/tv.jpg")}
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
