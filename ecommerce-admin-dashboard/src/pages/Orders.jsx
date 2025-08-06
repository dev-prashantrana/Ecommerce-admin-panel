const Orders = () => {
  const orders = [
    { id: '#1024', customer: 'Ravi Kumar', total: '$125.00', status: 'Delivered' },
    { id: '#1025', customer: 'Anjali Mehta', total: '$89.00', status: 'Processing' },
    { id: '#1026', customer: 'Manish Rawat', total: '$59.00', status: 'Shipped' },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Orders</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500 dark:text-gray-400 border-b">
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="text-sm text-gray-700 dark:text-gray-300 border-b">
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders