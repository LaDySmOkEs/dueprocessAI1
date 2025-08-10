import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('landing');

  const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => (
    <div className={`${className} flex items-center justify-center bg-amber-600 rounded-lg text-white font-bold text-2xl`}>
      ⚖️
    </div>
  );

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        <nav className="bg-gray-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Logo className="h-10 w-10" />
                <span className="text-xl font-bold">Due Process AI</span>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="px-4 py-2 bg-amber-500 text-gray-900 rounded-lg hover:bg-amber-400 font-semibold"
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <Logo className="h-20 w-20 mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Revolutionize Your
            <span className="text-amber-600"> Legal Practice</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered legal platform with integrated Due Process Registry to track violations and promote accountability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className="px-8 py-4 bg-amber-600 text-white text-lg font-semibold rounded-lg hover:bg-amber-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start 1-Day Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-amber-600 text-amber-600 text-lg font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl text-amber-600 mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Due Process Registry</h3>
              <p className="text-gray-600">Track violations and hold officials accountable.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl text-amber-600 mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI Legal Tools</h3>
              <p className="text-gray-600">Document analysis and legal document generation.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl text-amber-600 mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Case Management</h3>
              <p className="text-gray-600">Organize and track all your legal cases.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl text-amber-600 mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Premium Support</h3>
              <p className="text-gray-600">Get help when you need it most.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-gray-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Logo className="h-10 w-10" />
                <span className="text-xl font-bold">Due Process AI</span>
              </div>
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="px-3 py-2 rounded-md bg-gray-700"
                >
                  📊 Dashboard
                </button>
                <button 
                  onClick={() => setCurrentPage('registry')}
                  className="px-3 py-2 rounded-md hover:bg-gray-700"
                >
                  📋 Registry
                </button>
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  ⏰ 1 day left
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600 mb-8">Welcome back to Due Process AI</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-3xl text-amber-600 mr-4">💼</div>
                <div>
                  <p className="text-sm text-gray-500">Total Cases</p>
                  <p className="text-2xl font-semibold text-gray-900">0</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-3xl text-red-600 mr-4">📊</div>
                <div>
                  <p className="text-sm text-gray-500">Registry Reports</p>
                  <p className="text-2xl font-semibold text-gray-900">2</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-3xl text-yellow-600 mr-4">⏰</div>
                <div>
                  <p className="text-sm text-gray-500">Pending Items</p>
                  <p className="text-2xl font-semibold text-gray-900">3</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-3xl text-green-600 mr-4">📄</div>
                <div>
                  <p className="text-sm text-gray-500">Documents</p>
                  <p className="text-2xl font-semibold text-gray-900">47</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button className="p-4 text-left bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200">
                <div className="font-medium text-gray-900">📝 Start New Case</div>
                <div className="text-sm text-gray-600">Begin a new legal case</div>
              </button>
              <button 
                onClick={() => setCurrentPage('registry')}
                className="p-4 text-left bg-red-50 hover:bg-red-100 rounded-lg border border-red-200"
              >
                <div className="font-medium text-gray-900">🚨 Report Violation</div>
                <div className="text-sm text-gray-600">Document due process violations</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'registry') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-gray-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Logo className="h-10 w-10" />
                <span className="text-xl font-bold">Due Process AI</span>
              </div>
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="px-3 py-2 rounded-md hover:bg-gray-700"
                >
                  📊 Dashboard
                </button>
                <button 
                  onClick={() => setCurrentPage('registry')}
                  className="px-3 py-2 rounded-md bg-gray-700"
                >
                  📋 Registry
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <span className="text-4xl text-amber-600 mr-3">📊</span>
              Due Process Registry
            </h1>
            <p className="text-gray-600 mt-2">
              Document violations to build accountability and transparency
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Report Violation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Violation Type
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Fourth Amendment Violation</option>
                  <option>Fifth Amendment Violation</option>
                  <option>Brady Violation</option>
                  <option>Excessive Force</option>
                  <option>False Arrest</option>
                  <option>Malicious Prosecution</option>
                  <option>Prosecutorial Misconduct</option>
                  <option>Judicial Misconduct</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Official Name
                </label>
                <input
                  type="text"
                  placeholder="Enter official's name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department/Agency
                </label>
                <input
                  type="text"
                  placeholder="e.g., Metro Police, District Attorney"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Incident Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Badge/ID Number (if known)
                </label>
                <input
                  type="text"
                  placeholder="Badge or identification number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severity Level
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location of Incident
                </label>
                <input
                  type="text"
                  placeholder="Where did the violation occur?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide a detailed description of the due process violation..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 flex items-center space-x-2">
                <span>🚨</span>
                <span>Submit Report</span>
              </button>
              <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 flex items-center space-x-2">
                <span>📎</span>
                <span>Attach Evidence</span>
              </button>
            </div>
          </div>

          {/* Sample violations */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">HIGH</span>
                    <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">UNDER REVIEW</span>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <h4 className="font-semibold text-gray-900">Fourth Amendment Violation</h4>
                <p className="text-sm text-gray-600">Officer John Smith - Metro Police Department</p>
                <p className="text-sm text-gray-500 mt-1">Unlawful search of vehicle without warrant...</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">HIGH</span>
                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">VERIFIED</span>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <h4 className="font-semibold text-gray-900">Brady Violation</h4>
                <p className="text-sm text-gray-600">DA Sarah Johnson - District Attorney Office</p>
                <p className="text-sm text-gray-500 mt-1">Failure to disclose exculpatory evidence...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>Page not found</div>;
};

export default App;