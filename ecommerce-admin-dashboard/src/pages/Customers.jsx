const Customers = () => {
  const customers = [
    { name: 'Ravi Kumar', email: 'ravi@example.com', orders: 4 },
    { name: 'Anjali Mehta', email: 'anjali@example.com', orders: 2 },
    { name: 'Manish Rawat', email: 'manish@example.com', orders: 3 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Customers</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500 dark:text-gray-400 border-b">
              <th>Name</th>
              <th>Email</th>
              <th>Orders</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((person, i) => (
              <tr key={i} className="text-sm text-gray-700 dark:text-gray-300 border-b">
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers