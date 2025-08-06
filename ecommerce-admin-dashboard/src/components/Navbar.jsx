import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm p-4 flex gap-6 text-gray-800 dark:text-white">
      <Link to="/">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/customers">Customers</Link>
    </nav>
  )
}

export default Navbar