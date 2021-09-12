import React from 'react';
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"

function PlaceOrder() {

    const history = useHistory();

    const {paymentMethod} = useSelector(state => state.cart)
    const { loading, success, error, order } = useSelector(state => state.orderCreate);

    if (!paymentMethod) {
        history.push("/payment")
    }

    return (
        <div>
            Place order with id in params
        </div>
    )
}

export default PlaceOrder
