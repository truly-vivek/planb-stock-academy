
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master the
                <span className="block text-green-400">Stock Market</span>
                Like a Pro
              </h1>
              <p className="text-xl text-red-100 max-w-2xl">
                Join thousands of successful traders who learned with PlanB Solutions. 
                From beginner fundamentals to advanced strategies - we've got you covered.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all duration-200">
                  Start Learning Now
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all duration-200">
                  View Free Resources
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">10,000+</div>
                <div className="text-red-100">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">95%</div>
                <div className="text-red-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">4.8/5</div>
                <div className="text-red-100">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-semibold">Portfolio Value</span>
                  <span className="text-green-400 font-bold">+24.5%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-semibold">Monthly Returns</span>
                  <span className="text-green-400 font-bold">+12.3%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-semibold">Win Rate</span>
                  <span className="text-green-400 font-bold">87%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
