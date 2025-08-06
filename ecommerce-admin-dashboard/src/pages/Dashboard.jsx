import SalesChart from '../components/SalesChart'
import ActivityFeed from '../components/ActivityFeed'
import stats from '../data/stats'

const Dashboard = () => {
  const stats = [
    { label: 'Revenue', value: '$12,340', change: '+6.4%' },
    { label: 'Orders', value: '324', change: '-2.3%' },
    { label: 'Products', value: '57', change: '+1.1%' },
    { label: 'Customers', value: '1,204', change: '+3.8%' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {stats.map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.value}</h3>
              <p className={`text-sm mt-1 ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {item.change} from last week
              </p>
            </div>
          ))}
        </div>
      </div>

      <SalesChart />
      <ActivityFeed />
    </div>
  )
}

export default Dashboard