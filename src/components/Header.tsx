import React from 'react'
import { Activity, Bell, FileText, Home, Shield } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">TrustVector</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><Home className="h-5 w-5 mr-1" /> Dashboard</a></li>
            <li><a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><Bell className="h-5 w-5 mr-1" /> Alerts</a></li>
            <li><a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><Activity className="h-5 w-5 mr-1" /> Model Monitoring</a></li>
            <li><a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><Shield className="h-5 w-5 mr-1" /> Compliance</a></li>
            <li><a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><FileText className="h-5 w-5 mr-1" /> Validation</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header