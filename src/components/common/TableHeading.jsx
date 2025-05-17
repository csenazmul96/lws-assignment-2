function TableHeading() {
    return (
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
    );
}

export default TableHeading;