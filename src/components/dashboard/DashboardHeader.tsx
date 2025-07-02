
import { User } from 'lucide-react';

interface DashboardHeaderProps {
  userName: string;
  portfolioValue: string;
}

const DashboardHeader = ({ userName, portfolioValue }: DashboardHeaderProps) => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {userName}!</h1>
            <p className="text-red-100">Continue your trading education journey</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-300">{portfolioValue}</div>
            <div className="text-red-100 text-sm">Portfolio Value</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;
