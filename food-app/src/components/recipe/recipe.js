import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, credit }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title} >{title}</h1>
      <ul className={style.ingredients}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p className={style.calories}>{calories.toFixed(0)} calories</p>
      <img className={style.image} src={image} alt="" />
      <p className={style.credit}>{credit}</p>
    </div>
  );
};

export default Recipe;
