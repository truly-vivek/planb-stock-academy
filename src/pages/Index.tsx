
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CourseGrid from '@/components/CourseGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Proven Strategies",
      description: "Learn time-tested strategies used by successful traders and investors worldwide."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Risk Management",
      description: "Master the art of protecting your capital while maximizing returns."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals with decades of experience."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-600" />,
      title: "Practical Learning",
      description: "Apply your knowledge with real-world examples and hands-on exercises."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroSection />
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PlanB Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive education that transforms beginners into confident traders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CourseGrid />
      
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who started their journey with PlanB Solutions. 
            Your future self will thank you for taking action today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 h-auto">
                Start Learning Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 h-auto">
                Talk to Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
