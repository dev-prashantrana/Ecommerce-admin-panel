import { Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Customers from '../pages/Customers'

const AppRoutes = () => (
  <>
    <Route path="/" element={<Dashboard />} />
    <Route path="/products" element={<Products />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/customers" element={<Customers />} />
  </>
)

export default AppRoutes