import {useState} from 'react';
import OrderComponent from "../pages/OrderComponent.jsx";
import FilterIcon from "../icons/FilterIcon.jsx";
import TableHeading from "./TableHeading.jsx";

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

    const [filter, setFilter] = useState("");

    const filteredOrders = orders.filter(order => {
        if (filter === "") {
            return true;
        }
        return order.status === filter;
    })

    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-4">Order Reports</h2>
                <div className="flex gap-4 items-center">
                    <FilterIcon />
                    <select
                        value={filter}
                        onChange={(e)=>setFilter(e.target.value)}
                        className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
                        <option value={""}>All</option>
                        <option value={"PENDING"}>Pending</option>
                        <option value={"DELIVERED"}>Delivered</option>
                    </select>
                </div>
            </div>
            <div className="bg-cardbg rounded-lg p-4">
                <div className="reports-container">
                    <table className="min-w-full">
                        <TableHeading />
                        <tbody className="text-sm">
                        {filteredOrders && filteredOrders.map(order => (
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