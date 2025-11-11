import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { financialData } from "../data/mockData.ts";

function ExpenseChart() {
    const data = financialData.expenses;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
                Expense Breakdown
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip
                        formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`}
                    />
                    <Bar dataKey="amount" fill="#8b5cf6" />
                </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 flex items-center justify-between text-sm">
                <p className="text-gray-600">
                    Total: ${(financialData.kpis.totalExpenses / 1000).toFixed(0)}K
                </p>
                <p className="text-gray-600">
                    Highest: Payroll ($45K)
                </p>
            </div>
        </div>
    );
}

export default ExpenseChart;