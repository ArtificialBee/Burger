import React from 'react';
import Aux from '../../../hoc/Auxilliary'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
    })
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnStyle="Danger" clicked={props.close}>CANCEL</Button>
            <Button btnStyle="Success" clicked={props.continue}>CONTINUE</Button>
        </Aux>
    );
}

export default OrderSummary;
