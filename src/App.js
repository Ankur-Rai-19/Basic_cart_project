import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 148000,
                    title: "iPhone 14 Pro Max",
                    qty: 0,
                    img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                    id: 1,
                },

                {
                    price: 1999,
                    title: "Noise Watch",
                    qty: 0,
                    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9pc2UlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    id: 2,
                },

                {
                    price: 850000,
                    title: "Dell Laptop",
                    qty: 0,
                    img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                    id: 3,
                },
            ],
        };
        // this.increaseQuantity = this.increaseQuantity.bind(this);  //this is also binding below method is much bettor to do
    }

    /* `handelIncreaseQuantity` is a method defined in the `App` component class. It takes a `product` object as a parameter and is used to increase the quantity of that product in the cart. */
    handelIncreaseQuantity = (product) => {
        console.log("Hey please increase the quantity of", product);
        const { products } = this.state;
        const index = products.indexOf(product); // is finding the index of the `product` object in the `products` array

        products[index].qty += 1; // is increasing the quantity of a product in the cart by 1

        // this.setState` is a method used to update the state of a React component
        this.setState({
            products: products, //In this case, it is updating the `products` array in the state of the `Cart` component with the new `products` array
        });
    };

    handleDecreaseQuantity = (product) => {
        console.log("Hey please decrease the quantity of", product);
        const { products } = this.state;
        const index = products.indexOf(product); // is finding the index of the `product` object in the `products` array

        if (products[index].qty === 0) {
            return;
        }
        products[index].qty -= 1; // is decreasing the quantity of a product in the cart by 1

        this.setState({
            products: products,
        });
    };

    handleDeleteProduct = (id) => {
        const { products } = this.state;

        const items = products.filter((item) => item.id !== id);

        this.setState({
            products: items,
        });
    };

    /* `getCartCount` is a method defined in the `App` component class. It is used to calculate the total number of products in the cart. */
    getCartCount = () => {
        const { products } = this.state; // using destructuring to extract the `products` array from the `state` object
        let count = 0;

        // this method is used to calculate the total number of products in the cart
        products.forEach((products) => {
            //It is iterating over the `products` array using the `forEach` method and adding up the `qty` property of each product to the `count` variable.
            count += products.qty;
        });
        // Finally, it returns the `count` variable which represents the total number of products in the cart.
        return count;
    };

    /* `getCartTotal` is a method defined in the `App` component class. It is used to calculate the total cost of all the products in the cart. */
    getCartTotal = () => {
        const { products } = this.state;

        let cartTotal = 0;
        products.map((product) => {
            cartTotal = cartTotal + product.qty * product.price;
        });

        return cartTotal;
    };

    render() {
        const { products } = this.state;
        return (
            <div className="App">
                <Navbar count={this.getCartCount()} />
                <Cart
                    products={products}
                    onIncreaseQuantity={this.handelIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handleDeleteProduct}
                />

                <div
                    style={{
                        padding: 10,
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "yellow",
                        backgroundColor: "black",
                    }}
                >
                    TOTAL : {this.getCartTotal()}
                </div>
            </div>
        );
    }
}

export default App;
