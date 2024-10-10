import React from 'react'
import { AlertTriangle, BarChart2, CheckCircle, FileText, TrendingUp } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Alerts" icon={<AlertTriangle className="h-8 w-8 text-red-500" />} value="5" actionText="View Alerts" />
        <DashboardCard title="Models Monitored" icon={<BarChart2 className="h-8 w-8 text-blue-500" />} value="12" actionText="View Models" />
        <DashboardCard title="Compliance Status" icon={<CheckCircle className="h-8 w-8 text-green-500" />} value="98%" actionText="View Details" />
        <DashboardCard title="Pending Validations" icon={<FileText className="h-8 w-8 text-yellow-500" />} value="3" actionText="Start Validation" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ModelMetrics />
        <ComplianceChecklist />
      </div>

      <AnomalyAlerts />
    </div>
  )
}

const DashboardCard = ({ title, icon, value, actionText }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      {icon}
    </div>
    <p className="text-3xl font-bold text-gray-800 mb-4">{value}</p>
    <button className="text-blue-600 hover:text-blue-800 font-medium">{actionText}</button>
  </div>
)

const ModelMetrics = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Model Metrics</h3>
    <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
      <TrendingUp className="h-16 w-16 text-blue-500" />
      <span className="ml-2 text-gray-600">Chart placeholder</span>
    </div>
  </div>
)

const ComplianceChecklist = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Compliance Checklist</h3>
    <ul className="space-y-2">
      <ComplianceItem status="complete" text="Data Privacy Compliance" />
      <ComplianceItem status="in-progress" text="Model Documentation" />
      <ComplianceItem status="complete" text="Bias Assessment" />
      <ComplianceItem status="not-started" text="Ethical AI Guidelines" />
    </ul>
  </div>
)

const ComplianceItem = ({ status, text }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'complete': return 'text-green-500';
      case 'in-progress': return 'text-yellow-500';
      case 'not-started': return 'text-red-500';
      default: return 'text-gray-500';
    }
  }

  return (
    <li className="flex items-center">
      <CheckCircle className={`h-5 w-5 mr-2 ${getStatusColor(status)}`} />
      <span className="text-gray-700">{text}</span>
    </li>
  )
}

const AnomalyAlerts = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Anomaly Alerts</h3>
    <div className="space-y-4">
      <AnomalyAlert 
        title="Unusual Model Behavior Detected" 
        description="Model XYZ showing unexpected output patterns." 
        action="Investigate" 
      />
      <AnomalyAlert 
        title="Data Drift Detected" 
        description="Input distribution for Model ABC has significantly changed." 
        action="Review Data" 
      />
    </div>
  </div>
)

const AnomalyAlert = ({ title, description, action }) => (
  <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
    <div className="flex items-center">
      <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </div>
    <p className="mt-2 text-gray-600">{description}</p>
    <button className="mt-2 text-blue-600 hover:text-blue-800 font-medium">{action}</button>
  </div>
)

export default Dashboard