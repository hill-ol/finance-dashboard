import { useState } from 'react';
import {financialData} from "./data/mockData.ts";
import KPICard from "./components/KPICard.tsx";

function App() {
    const { kpis } = financialData;

    return (
      <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b">
              <div className="max-w-7xl mx-auto px-4 py-4">
                  <h1 className="text-2xl font-bold text-gray-900">
                      Finance Analytics Dashboard
                  </h1>
              </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <KPICard
                      title="Total Revenue"
                      value={`$${(kpis.totalRevenue / 1000).toFixed(0)}K`}
                      change={kpis.growthRate}
                  />
                  <KPICard
                      title="Total Expenses"
                      value={`$${(kpis.totalExpenses / 1000).toFixed(0)}K`}
                      change={-3.2}
                  />
                  <KPICard
                      title="Profit"
                      value={`$${(kpis.profit / 1000).toFixed(0)}K`}
                      change={15.8}
                  />
                  <KPICard
                      title="Growth Rate"
                      value={`${kpis.growthRate}%`}
                      change={2.1}
                  />
              </div>
          </main>
      </div>
    );
}

export default App;