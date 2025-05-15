import React, {useState} from 'react';
import OrderComponent from "../pages/OrderComponent.jsx";
import Filter from "../icons/Filter.jsx";

function OrderReports({orders, setOrders}) {
    const handleButtonClickEvent = (eventType , id) => {
        if (eventType === "delete") {
            const updatedOrders = orders.filter(order => order.id !== id);
            setOrders(updatedOrders);
        } else {
            const updatedOrders = orders.map(order => {
                if (order.id === id) {
                    return { ...order, status: 'DELIVERED' };
                }
                return order;
            });
            setOrders(updatedOrders);
        }
    }

    const [filter, setFilter] = useState('All');



    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-4">Order Reports</h2>

                <div className="flex gap-4 items-center">
                    <Filter />
                    <select
                        className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
                        <option>All</option>
                        <option>Pending</option>
                        <option>Delivered</option>
                    </select>
                </div>
            </div>
            <div className="bg-cardbg rounded-lg p-4">
                <div className="reports-container">
                    <table className="min-w-full">
                        <thead>
                        <tr className="text-left text-sm">
                            <th className="pb-3 font-medium">ID</th>
                            <th className="pb-3 font-medium">Customer Name</th>
                            <th className="pb-3 font-medium">Items</th>
                            <th className="pb-3 font-medium">Amount</th>
                            <th className="pb-3 font-medium">Status</th>
                            <th className="pb-3 font-medium">Action</th>
                        </tr>
                        </thead>
                        <tbody className="text-sm">
                        {orders.map(order => (
                            <OrderComponent key={order.id} order={order} handleButtonClickEvent={handleButtonClickEvent} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderReports;