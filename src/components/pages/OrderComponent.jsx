import React from 'react';

function OrderComponent({order, handleButtonClickEvent}) {
    return (
        <tr className="border-t border-gray-700">
            <td className="py-3">{order.id}</td>
            <td className="py-3">{order.customer}</td>
            <td className="py-3">{order.quantity}</td>
            <td className="py-3">{order.price}</td>
            <td className="py-3">
                <span className={`${order.status === 'DELIVERED' ? "text-green-500" : "text-red-500"} `}>{order.status}</span>
            </td>
            <td className="py-3">
                <button onClick={()=>handleButtonClickEvent("delete", order.id)} className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete </button>

                {order.status === 'PENDING' && <button onClick={()=>handleButtonClickEvent("delivary", order.id)} className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER </button>}

            </td>
        </tr>
    );
}

export default OrderComponent;