
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Stock Market Fundamentals",
    description: "Learn the basics of stock market investing, from understanding market dynamics to making your first investment.",
    price: "₹2,999",
    originalPrice: "₹4,999",
    duration: "8 hours",
    students: "2,456",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Technical Analysis Mastery",
    description: "Master chart patterns, indicators, and technical analysis techniques used by professional traders.",
    price: "₹4,999",
    originalPrice: "₹7,999",
    duration: "12 hours",
    students: "1,834",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Options Trading Strategies",
    description: "Advanced options strategies for generating consistent income and hedging your portfolio effectively.",
    price: "₹6,999",
    originalPrice: "₹9,999",
    duration: "15 hours",
    students: "1,245",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Risk Management & Psychology",
    description: "Learn to control emotions, manage risk, and develop the mindset of successful traders.",
    price: "₹3,999",
    originalPrice: "₹5,999",
    duration: "10 hours",
    students: "3,167",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "Cryptocurrency Trading",
    description: "Navigate the crypto markets with confidence using proven strategies and risk management techniques.",
    price: "₹5,999",
    originalPrice: "₹8,999",
    duration: "14 hours",
    students: "987",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "Portfolio Management Pro",
    description: "Build and manage diversified portfolios like institutional investors with advanced allocation strategies.",
    price: "₹7,999",
    originalPrice: "₹11,999",
    duration: "18 hours",
    students: "756",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
];

const CourseGrid = ({ showAll = false }) => {
  const displayedCourses = showAll ? courses : courses.slice(0, 3);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the markets with our comprehensive courses designed by industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((course, index) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${getLevelColor(course.level)}`}>
                  {course.level}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-red-600 transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{course.students}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-red-600">{course.price}</span>
                  <span className="text-gray-400 line-through">{course.originalPrice}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Save {Math.round((1 - parseInt(course.price.replace('₹', '').replace(',', '')) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                  </Badge>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-red-600 hover:bg-red-700 group-hover:bg-red-700 transition-colors">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                View All Courses
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseGrid;
