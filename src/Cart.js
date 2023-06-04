import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return (
                    // This code is rendering a list of `CartItem` components based on the `products` array passed as a prop to the `Cart` component
                    <CartItem
                        // Each `CartItem` component is passed the following props:
                        product={product}
                        key={product.id} //The `key` prop is used by React to keep track of each `CartItem` component in the virtual DOM
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                );
            })}
        </div>
    );
};

export default Cart;
