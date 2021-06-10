import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchaseable: false,
        purchasing: false
    }


    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0)
        console.log("SUMA ELEMENATA: ", sum > 0);
        this.setState({ purchaseable: sum > 0 })
    }

    addIngerdientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        const updateCount = oldCount + 1;
        const updateIngredient = {
            ...this.state.ingredients
        }
        updateIngredient[type] = updateCount; //Updateovanje novog objekta koji sluzi za kopiranje
        const additionPrices = INGREDIENT_PRICES[type];
        let newPrice = oldPrice + additionPrices;
        newPrice = Math.round(newPrice * 100) / 100;
        this.setState({ ingredients: updateIngredient, totalPrice: newPrice })
        this.updatePurchaseState(updateIngredient);

    }

    removeIngerdientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredient = {
            ...this.state.ingredients
        }
        updateIngredient[type] = updateCount; //Updateovanje novog objekta koji sluzi za kopiranje
        const deductionPrices = INGREDIENT_PRICES[type];
        let newPrice = oldPrice - deductionPrices;
        newPrice = Math.round(newPrice * 100) / 100;
        this.setState({ ingredients: updateIngredient, totalPrice: newPrice })
        this.updatePurchaseState(updateIngredient)
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCloseHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinue = () => {
        alert("Your ingredients will sent to sever. Burger is on the road!")
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCloseHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        close={this.purchaseCloseHandler}
                        continue={this.purchaseContinue}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientsAdded={this.addIngerdientHandler}
                    ingredientsRemoved={this.removeIngerdientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    orderd={this.purchaseHandler}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;
