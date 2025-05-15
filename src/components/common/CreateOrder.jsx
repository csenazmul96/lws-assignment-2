import React, {useState} from 'react';
import Product from "../pages/Product.jsx";

function CreateOrder({setOrders}) {

    const [products, setProducts] = useState([
        { name: "Hamburger", image: "./assets/hamburger.svg", price: 300, id: 1, orderStatus: false },
        { name: "Chicken Nuggets", image: "./assets/chicken.svg", price: 300, id: 2, orderStatus: false },
        { name: "Submarine Sandwich", image: "./assets/submarine.svg", price: 300, id: 3, orderStatus: false },
        { name: "Pizza slices", image: "./assets/pizza.svg", price: 300, id: 4, orderStatus: false }
    ])

    const [customer, setCustomer] = useState('')

    const submitOrder = () => {
        if (customer === '') {
            alert('Please enter customer name')
            return
        }

        const orderItems = products.filter(product => product.orderStatus)
        if (orderItems.length === 0) {
            alert('Please select at least one item')
            return
        }

        const total = orderItems.reduce((acc, product) => acc + product.price, 0)

        const order = {
            id: Math.floor(Math.random() * 10000),
            customer: customer,
            status: 'PENDING',
            price: total,
            quantity: orderItems.length
        }

        setOrders(prevOrders => [...prevOrders, order])

        setCustomer('')
        setProducts(products.map(product => ({ ...product, orderStatus: false })))
    }

    const calculateTotal = () => {
        const total = products.reduce((acc, product) => {
            if (product.orderStatus) {
                return acc + product.price;
            }
            return acc;
        }, 0);
        return total
    }

    return (
        <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
            <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
            <p className="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                understanding of their requirements.</p>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Customer Name</label>
                <input type="text"
                       value={customer}
                       onChange={(e) => setCustomer(e.target.value)}
                       className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"/>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Choose Items</label>
                <div className="items-container">
                    {products.map(product => (
                        <Product key={product.id} product={product} setProducts={setProducts} />
                    ))}
                </div>
            </div>

            <button
                onClick={submitOrder}
                className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Place Order (BDT {calculateTotal()})
            </button>
        </div>
    );
}

export default CreateOrder;