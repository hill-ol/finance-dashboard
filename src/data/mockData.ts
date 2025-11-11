export const financialData = {
    monthlyRevenue: [
        { month: "Jan", actual: 120000, predicted: 115000, confidence: 0.92 },
        { month: "Feb", actual: 135000, predicted: 130000, confidence: 0.89 },
        { month: "Mar", actual: 142000, predicted: 138000, confidence: 0.91 },
        { month: "Apr", actual: 155000, predicted: 150000, confidence: 0.94 },
        { month: "May", actual: 148000, predicted: 160000, confidence: 0.87 },
        { month: "Jun", actual: 170000, predicted: 165000, confidence: 0.93 },
    ],

    expenses: [
        { category: "Payroll", amount: 45000 },
        { category: "Marketing", amount: 28000 },
        { category: "Infrastructure", amount: 15000 },
        { category: "Office", amount: 8000 },
        { category: "Software", amount: 12000 },
    ],

    kpis: {
        totalRevenue: 870000,
        totalExpenses: 108000,
        profit: 762000,
        growthRate: 12.5,
    },

    mlMetrics: {
        accuracy: 0.94,
        avgConfidence: 0.91,
        predictionsMade: 156,
        anomaliesDetected: 3,
    }
};