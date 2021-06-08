import React from 'react';
import './Burger.css'
import BurgerIngredient from './BurgerIngrediant/BurgerIngredient'

const Burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, [])
    console.log("NASNIZJEOVO: ", transformIngredients.length)
    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients!!!</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;
