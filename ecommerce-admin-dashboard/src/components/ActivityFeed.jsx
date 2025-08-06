const ActivityFeed = () => {
  const feed = [
    { user: 'Ravi Kumar', action: 'placed an order', time: '2h ago' },
    { user: 'Anjali Mehta', action: 'added a product', time: '5h ago' },
    { user: 'Admin', action: 'updated pricing', time: 'Yesterday' },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-3">
      <h3 className="font-semibold text-gray-800 dark:text-white text-lg">Recent Activity</h3>
      {feed.map((item, i) => (
        <p key={i} className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-medium">{item.user}</span> {item.action}
          <span className="text-xs text-gray-400"> ({item.time})</span>
        </p>
      ))}
    </div>
  )
}

export default ActivityFeed