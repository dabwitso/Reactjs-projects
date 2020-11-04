import React, { useEffect, useState } from "react";
import Recipe from "./components/recipe/recipe";
import './App.css';



function App() {
  const API_ID = "3777fa3d";
  const API_KEY = " d67b536240b811ed06f74670143838b3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    getRecipes();
  },[])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="app">
      <form className="search-form">
        <input className="search-bar" value={search} onChange={e => setSearch(e.target.value)} type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
