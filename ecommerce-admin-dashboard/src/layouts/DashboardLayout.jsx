import Navbar from '../components/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow p-6">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout