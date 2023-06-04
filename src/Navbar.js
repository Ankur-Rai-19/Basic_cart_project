import React from "react";
import "./Navbar.css";

// Functional Component
// we can convert this to function component because this does not have the state
const Navbar = (props) => {
    return (
        <div className="nav">
            <div className="cartIconContainer">
                <img
                    style={styles.cartIcon}
                    src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                    alt="cart-icon"
                />
                <span className="cartCount">{props.count}</span>
            </div>
        </div>
    );
};

const styles = {
    cartIcon: {
        height: 40,
        marginRight: 15,
    },
};

export default Navbar;
