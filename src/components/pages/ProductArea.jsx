import CreateOrder from "../common/CreateOrder.jsx";
import OrderSummary from "../common/OrderSummary.jsx";
import OrderReports from "../common/OrderReports.jsx";
import {useState} from "react";

function ProductArea() {
    const [orders, setOrders] = useState([])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
            <CreateOrder setOrders={setOrders}/>

            <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
                <OrderSummary orders={orders} />

                <OrderReports orders={orders} setOrders={setOrders} />
            </div>
        </div>
    );
}

export default ProductArea;