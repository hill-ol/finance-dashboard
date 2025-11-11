import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { financialData } from "../data/mockData.ts";

function RevenueChart() {
    const data = financialData.monthlyRevenue;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
                Revenue: Actual vs Predicted
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                        formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="actual"
                        stroke="#2563eb"
                        strokeWidth={2}
                        name="Actual Revenue"
                    />
                    <Line
                        type="monotone"
                        dataKey="predicted"
                        stroke={"#10b981"}
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="AI Predicted"
                    />
                </LineChart>
            </ResponsiveContainer>

            <p className="text-sm text-gray-600 mt-4">
                AI prediction accuracy: 91% average confidence.
            </p>
        </div>
    );
}

export default RevenueChart;