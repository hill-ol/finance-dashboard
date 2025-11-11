interface KPICardProps {
    title: string;
    value: string | number;
    change?: number;
    icon?: string;
}

function KPICard({ title, value, change }: KPICardProps) {
    const isPositive = change && change > 0;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
            <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>

            {change !== undefined && (
                <div className="flex items-center">
                    <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {isPositive ? '↑' : '↓'} {Math.abs(change)}%
                    </span>
                    <span className="text-sm text-gray-500 ml-2">vs last month</span>
                </div>
            )}
        </div>
    );
}

export default KPICard;