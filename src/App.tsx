import { useState } from 'react';

function App() {
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
              <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                      <h2 className="text-xl font-semibold mb-4">
                          Dashboard
                      </h2>
                  </div>
              </div>
          </main>
      </div>
    );
}

export default App;