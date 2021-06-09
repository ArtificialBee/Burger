import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            <h1>Total price: {props.price}</h1>
            {controls.map(ctrl => {
                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientsAdded(ctrl.type)}
                    removed={() => props.ingredientsRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
            })}
            <button
                className="OrderButton"
                disabled={!props.purchaseable}
                onClick={props.orderd}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls;
