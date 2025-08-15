import React from "react";
import Chart from "react-apexcharts";
import "./style.css";

const primary = {"50":"#f3f1ff","100":"#e9e5ff","200":"#d5cfff","300":"#b7a9ff","400":"#9478ff","500":"#7341ff","600":"#631bff","700":"#611bf8","800":"#4607d0","900":"#3c08aa","950":"#220174","DEFAULT":"#611bf8","baseValue":"#611BF8"}
const neutral = {"50":"#f7f7f7","100":"#eeeeee","200":"#e0e0e0","300":"#cacaca","400":"#b1b1b1","500":"#999999","600":"#7f7f7f","700":"#676767","800":"#545454","900":"#464646","950":"#282828","baseValue":"#FFFFFF"}


export const Component = () => {
  return (
<div id="webcrumbs"> 
        	<div className="min-h-screen bg-gray-100 flex flex-col">
	  {/* Top Navigation */}
	  <nav className="bg-white shadow-md py-4 px-6">
	    <div className="flex justify-between items-center">
	      <div className="flex items-center">
	        <div className="text-primary-700 text-2xl font-bold mr-2">
	          <span className="material-symbols-outlined text-3xl align-middle">local_gas_station</span>
	        </div>
	        <h1 className="text-xl font-bold">PetroLoyalty System</h1>
	      </div>
	      
	      <div className="flex items-center space-x-4">
	        <div className="relative">
	          <details className="group">
	            <summary className="flex items-center space-x-2 cursor-pointer list-none">
	              <span className="material-symbols-outlined bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all">notifications</span>
	              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</div>
	            </summary>
	            <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
	              <div className="py-2">
	                <h3 className="px-4 py-2 font-medium text-sm text-gray-700 bg-gray-50">Notifications</h3>
	                <div className="px-4 py-2 hover:bg-gray-50 transition-colors border-b">
	                  <p className="text-sm font-medium">Low stock alert: Regular Petrol</p>
	                  <p className="text-xs text-gray-500">10 minutes ago</p>
	                </div>
	                <div className="px-4 py-2 hover:bg-gray-50 transition-colors border-b">
	                  <p className="text-sm font-medium">New redemption request</p>
	                  <p className="text-xs text-gray-500">25 minutes ago</p>
	                </div>
	                <div className="px-4 py-2 hover:bg-gray-50 transition-colors">
	                  <p className="text-sm font-medium">System backup completed</p>
	                  <p className="text-xs text-gray-500">1 hour ago</p>
	                </div>
	              </div>
	            </div>
	          </details>
	        </div>
	        
	        <div className="relative">
	          <details className="group">
	            <summary className="flex items-center space-x-2 cursor-pointer list-none">
	              <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
	                <span>AM</span>
	              </div>
	              <span className="font-medium">Admin Manager</span>
	              <span className="material-symbols-outlined">expand_more</span>
	            </summary>
	            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
	              <div className="py-1">
	                <a href="#profile" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors">
	                  <span className="material-symbols-outlined align-middle mr-2 text-gray-500">person</span>
	                  Profile
	                </a>
	                <a href="#settings" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors">
	                  <span className="material-symbols-outlined align-middle mr-2 text-gray-500">settings</span>
	                  Settings
	                </a>
	                <hr className="my-1" />
	                <a href="#logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors">
	                  <span  className="material-symbols-outlined align-middle mr-2">logout</span>
	                  Logout
	                </a>
	              </div>
	            </div>
	          </details>
	        </div>
	      </div>
	    </div>
	  </nav>
	
	  {/* Main Content */}
	  <div className="flex flex-1 overflow-hidden">
	    {/* Sidebar */}
	    <aside  className="w-64 bg-primary-800 text-white shadow-lg">
	      <div className="p-4">
	        <div className="bg-primary-700 rounded-md p-3 mb-4">
	          <div className="flex items-center">
	            <span className="material-symbols-outlined mr-2">badge</span>
	            <div>
	              <p className="text-sm opacity-80">Logged in as</p>
	              <p className="font-medium">Admin</p>
	            </div>
	          </div>
	        </div>
	        
	        <nav>
	          <ul className="space-y-1">
	            <li>
	              <a href="#dashboard" className="flex items-center space-x-3 px-3 py-2 rounded-md bg-primary-700 hover:bg-primary-600 transition-colors">
	                <span className="material-symbols-outlined">dashboard</span>
	                <span>Dashboard</span>
	              </a>
	            </li>
	            <li >
	              <a href="#customer" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-700 transition-colors">
	                <span className="material-symbols-outlined">group</span>
	                <span>Customer Master</span>
	              </a>
	            </li>
	            <li>
	              <a href="#product" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-700 transition-colors">
	                <span className="material-symbols-outlined">inventory_2</span>
	                <span>Product Master</span>
	              </a>
	            </li>
	            <li>
	              <a href="#gift" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-700 transition-colors">
	                <span className="material-symbols-outlined">redeem</span>
	                <span>Gift Master</span>
	              </a>
	            </li>
	            <li>
	              <a href="#employee" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-700 transition-colors">
	                <span className="material-symbols-outlined">engineering</span>
	                <span>Employee Master</span>
	              </a>
	            </li>
	            <li>
	              <a href="#sales" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-700 transition-colors">
	                <span className="material-symbols-outlined">point_of_sale</span>
	                <span>Sales Entry</span>
	              </a>
	            </li>
	            <li>
	              <a href="#redemption" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-700 transition-colors">
	                <span className="material-symbols-outlined">redeem</span>
	                <span>Points Redemption</span>
	              </a>
	            </li>
	            <li>
	              <details className="group">
	                <summary className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-700 transition-colors cursor-pointer list-none">
	                  <span className="material-symbols-outlined">analytics</span>
	                  <span>Ledger Reports</span>
	                  <span className="material-symbols-outlined ml-auto transform group-open:rotate-180 transition-transform">expand_more</span>
	                </summary>
	                <ul  className="ml-8 mt-1 space-y-1">
	                  <li >
	                    <a href="#sales-ledger" className="block py-1 hover:text-primary-200 transition-colors">Sales Ledger</a>
	                  </li>
	                  <li>
	                    <a href="#redemption-ledger" className="block py-1 hover:text-primary-200 transition-colors">Redemption Ledger</a>
	                  </li>
	                  <li>
	                    <a href="#points-ledger" className="block py-1 hover:text-primary-200 transition-colors">Points Ledger</a>
	                  </li>
	                </ul>
	              </details>
	            </li>
	            <li >
	              <details className="group">
	                <summary className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-700 transition-colors cursor-pointer list-none">
	                  <span className="material-symbols-outlined">settings</span>
	                  <span>System Settings</span>
	                  <span className="material-symbols-outlined ml-auto transform group-open:rotate-180 transition-transform">expand_more</span>
	                </summary>
	                <ul className="ml-8 mt-1 space-y-1">
	                  <li>
	                    <a href="#user-management" className="block py-1 hover:text-primary-200 transition-colors">User Management</a>
	                  </li>
	                  <li>
	                    <a href="#roles-permissions" className="block py-1 hover:text-primary-200 transition-colors">Roles & Permissions</a>
	                  </li>
	                  <li>
	                    <a href="#point-settings" className="block py-1 hover:text-primary-200 transition-colors">Point Settings</a>
	                  </li>
	                  <li>
	                    <a href="#system-backup" className="block py-1 hover:text-primary-200 transition-colors">System Backup</a>
	                  </li>
	                </ul>
	              </details>
	            </li>
	            <li>
	              <a href="#help" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-700 transition-colors">
	                <span className="material-symbols-outlined">help</span>
	                <span>Help & Support</span>
	              </a>
	            </li>
	          </ul>
	        </nav>
	      </div>
	    </aside>
	
	    {/* Main Dashboard Content */}
	    <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
	      <div className="mb-6">
	        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
	        <p className="text-gray-600">Welcome back! Here's an overview of your loyalty system.</p>
	      </div>
	
	      {/* Quick Action Buttons */}
	      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
	        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center space-x-3 border-l-4 border-blue-500">
	          <span className="material-symbols-outlined p-2 bg-blue-100 text-blue-600 rounded-full">person_add</span>
	          <span>New Customer</span>
	        </button>
	        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center space-x-3 border-l-4 border-green-500">
	          <span className="material-symbols-outlined p-2 bg-green-100 text-green-600 rounded-full">receipt_long</span>
	          <span>Sales Entry</span>
	        </button>
	        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center space-x-3 border-l-4 border-purple-500">
	          <span className="material-symbols-outlined p-2 bg-purple-100 text-purple-600 rounded-full">redeem</span>
	          <span>Redeem Points</span>
	        </button>
	        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center space-x-3 border-l-4 border-amber-500">
	          <span className="material-symbols-outlined p-2 bg-amber-100 text-amber-600 rounded-full">description</span>
	          <span>View Reports</span>
	        </button>
	      </div>
	
	      {/* Key Metrics */}
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
	        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
	          <div className="flex items-center justify-between mb-4">
	            <h3 className="text-gray-500 text-sm uppercase font-semibold">Total Customers</h3>
	            <span className="material-symbols-outlined text-primary-600 bg-primary-100 p-2 rounded-full">group</span>
	          </div>
	          <p className="text-3xl font-bold">3,248</p>
	          <p className="text-green-600 text-sm flex items-center mt-2">
	            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
	            <span>4.5% from last month</span>
	          </p>
	        </div>
	
	        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
	          <div className="flex items-center justify-between mb-4">
	            <h3  className="text-gray-500 text-sm uppercase font-semibold">Total Vehicles</h3>
	            <span className="material-symbols-outlined text-blue-600 bg-blue-100 p-2 rounded-full">directions_car</span>
	          </div>
	          <p className="text-3xl font-bold">2,879</p>
	          <p className="text-green-600 text-sm flex items-center mt-2">
	            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
	            <span>3.2% from last month</span>
	          </p>
	        </div>
	
	        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
	          <div className="flex items-center justify-between mb-4">
	            <h3 className="text-gray-500 text-sm uppercase font-semibold">Points Issued</h3>
	            <span className="material-symbols-outlined text-amber-600 bg-amber-100 p-2 rounded-full">add_circle</span>
	          </div>
	          <p className="text-3xl font-bold">82,450</p>
	          <p className="text-green-600 text-sm flex items-center mt-2">
	            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
	            <span>7.8% from last month</span>
	          </p>
	        </div>
	
	        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
	          <div className="flex items-center justify-between mb-4">
	            <h3 className="text-gray-500 text-sm uppercase font-semibold">Points Redeemed</h3>
	            <span className="material-symbols-outlined text-purple-600 bg-purple-100 p-2 rounded-full">redeem</span>
	          </div>
	          <p className="text-3xl font-bold">45,780</p>
	          <p  className="text-red-600 text-sm flex items-center mt-2">
	            <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
	            <span>2.3% from last month</span>
	          </p>
	        </div>
	      </div>
	
	      {/* Sales Trend Chart */}
	      <div className="bg-white rounded-lg shadow p-6 mb-6">
	        <div className="flex justify-between items-center mb-6">
	          <h3 className="font-semibold text-lg">Monthly Sales Trend</h3>
	          <div className="flex space-x-2">
	            <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all">
	              <option>Last 6 Months</option>
	              <option>Last 12 Months</option>
	              <option>Year to Date</option>
	            </select>
	          </div>
	        </div>
	        
	        <div className="h-80">
	          <Chart 
	            type="area"
	            width="100%"
	            height="320px"
	            series={[
	              {
	                name: "Diesel",
	                data: [28000, 32000, 30000, 35000, 39000, 42000]
	              },
	              {
	                name: "Petrol",
	                data: [22000, 24000, 25000, 28000, 26000, 29000]
	              },
	              {
	                name: "Premium Fuel",
	                data: [12000, 13000, 14000, 15000, 16000, 18000]
	              }
	            ]}
	            options={{
	              chart: {
	                toolbar: {
	                  show: false
	                },
	                zoom: {
	                  enabled: false
	                }
	              },
	              colors: ['#1e40af', '#059669', '#7c3aed'],
	              fill: {
	                type: 'gradient',
	                gradient: {
	                  shadeIntensity: 1,
	                  opacityFrom: 0.7,
	                  opacityTo: 0.2,
	                  stops: [0, 90, 100]
	                }
	              },
	              dataLabels: {
	                enabled: false
	              },
	              stroke: {
	                curve: 'smooth',
	                width: 2
	              },
	              grid: {
	                borderColor: '#f1f1f1',
	                row: {
	                  colors: ['transparent', 'transparent'],
	                  opacity: 0.5
	                }
	              },
	              xaxis: {
	                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	                labels: {
	                  style: {
	                    colors: '#64748b'
	                  }
	                }
	              },
	              yaxis: {
	                labels: {
	                  formatter: function(val) {
	                    return '₹' + val.toLocaleString();
	                  },
	                  style: {
	                    colors: '#64748b'
	                  }
	                }
	              },
	              legend: {
	                position: 'top',
	                horizontalAlign: 'right'
	              },
	              tooltip: {
	                y: {
	                  formatter: function(val) {
	                    return '₹' + val.toLocaleString();
	                  }
	                }
	              }
	            }}
	          />
	        </div>
	      </div>
	
	      {/* RFID Scan Lookup */}
	      <div className="bg-white rounded-lg shadow p-6 mb-6">
	        <h3 className="font-semibold text-lg mb-4">Quick RFID Lookup</h3>
	        <div  className="flex flex-col md:flex-row md:items-center md:space-x-4">
	          <div className="flex-1 mb-4 md:mb-0">
	            <div className="relative">
	              <input 
	                type="text" 
	                placeholder="Scan RFID Tag" 
	                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
	              />
	              <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">contactless</span>
	            </div>
	          </div>
	          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center">
	            <span className="material-symbols-outlined mr-2">search</span>
	            Lookup
	          </button>
	        </div>
	      </div>
	
	      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
	        {/* Day Summary */}
	        <div className="bg-white rounded-lg shadow p-6">
	          <div className="flex justify-between items-center mb-6">
	            <h3 className="font-semibold text-lg">Day Summary</h3>
	            <div className="relative">
	              <input 
	                type="date" 
	                className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
	                defaultValue="2023-06-20"
	              />
	            </div>
	          </div>
	          
	          <div className="grid grid-cols-2 gap-4">
	            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
	              <h4 className="text-sm text-gray-500 mb-1">Sales</h4>
	              <p className="text-xl font-bold">₹45,890</p>
	            </div>
	            <div  className="bg-gray-50 p-4 rounded-lg border border-gray-200">
	              <h4 className="text-sm text-gray-500 mb-1">Transactions</h4>
	              <p className="text-xl font-bold">143</p>
	            </div>
	            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
	              <h4 className="text-sm text-gray-500 mb-1">Points Issued</h4>
	              <p className="text-xl font-bold">4,590</p>
	            </div>
	            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
	              <h4 className="text-sm text-gray-500 mb-1">Gifts Redeemed</h4>
	              <p className="text-xl font-bold">12</p>
	            </div>
	          </div>
	        </div>
	
	        {/* Recent Transactions */}
	        <div className="bg-white rounded-lg shadow p-6">
	          <div  className="flex justify-between items-center mb-6">
	            <h3 className="font-semibold text-lg">Recent Transactions</h3>
	            <a href="#viewall" className="text-primary-600 hover:text-primary-800 transition-colors text-sm flex items-center">
	              View All
	              <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
	            </a>
	          </div>
	          
	          <div className="overflow-x-auto">
	            <table className="w-full min-w-full divide-y divide-gray-200">
	              <thead>
	                <tr>
	                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
	                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
	                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
	                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
	                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
	                </tr>
	              </thead>
	              <tbody className="bg-white divide-y divide-gray-200">
	                <tr className="hover:bg-gray-50 transition-colors">
	                  <td className="px-3 py-2 whitespace-nowrap text-sm">Rahul Sharma</td>
	                  <td className="px-3 py-2 whitespace-nowrap text-sm">Diesel</td>
	                  <td className="px-3 py-2 whitespace-nowrap text-sm">₹1,450</td>
	                  <td className="px-3 py-2 whitespace-nowrap text-sm">145</td>
	                  <td className="px-3 py-2 whitespace-nowrap text-sm">10:45 AM</td>
	                </tr>
	                <tr className="hover:bg-gray-50 transition-colors">
	                  <td className="px-3 py-2 whitespace-nowrap text-sm">Priya Patel</td>
	                  <td className="px-3 py-2 whitespace-nowrap text-sm">Petrol</td>
	                  <td className="px-3 py-2 whitespace-nowrap text-sm">₹900</td>
	                  <td  className="px-3 py-2 whitespace-nowrap text-sm">90</td>
	                  </tr></tbody></table></div></div></div></main></div></div> 
        </div>
  )
}

