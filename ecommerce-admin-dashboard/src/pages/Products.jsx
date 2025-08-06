const Products = () => {
  const products = [
    { name: 'Wireless Mouse', price: '$25', stock: 42 },
    { name: 'Gaming Keyboard', price: '$89', stock: 18 },
    { name: 'USB-C Charger', price: '$15', stock: 103 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Products</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500 dark:text-gray-400 border-b">
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={i} className="text-sm text-gray-700 dark:text-gray-300 border-b">
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products