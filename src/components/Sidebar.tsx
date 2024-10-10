import React from 'react'
import { User, List, Settings } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 min-h-screen shadow-md">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <User className="h-10 w-10 text-gray-500 mr-3" />
          <div>
            <h3 className="font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-600">Admin</p>
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded">
                <List className="h-5 w-5 mr-2" />
                Manage Alerts
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded">
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar