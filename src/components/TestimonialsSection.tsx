
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Software Engineer",
    content: "PlanB Solutions transformed my understanding of the stock market. Within 6 months, I've generated consistent returns of 20%+. The courses are practical and easy to follow.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Manager",
    content: "As a complete beginner, I was intimidated by trading. The fundamentals course gave me confidence and now I'm successfully managing my own portfolio worth ₹5 lakhs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b412?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    content: "The technical analysis course is phenomenal! I've improved my win rate from 40% to 85%. The instructors really know their stuff and explain complex concepts simply.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Financial Analyst",
    content: "Even with my finance background, I learned new strategies that boosted my trading performance. The options trading course is worth every rupee!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Teacher",
    content: "Started with ₹50,000 and now managing ₹3 lakhs successfully. The risk management techniques saved me from major losses during market volatility.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Kavya Nair",
    role: "Doctor",
    content: "Perfect for busy professionals! The bite-sized lessons fit my schedule and the community support is amazing. Highly recommend to anyone serious about investing.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our students transformed their financial future with PlanB Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-300">4.9/5</div>
              <div className="text-red-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">10,000+</div>
              <div className="text-red-100">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">95%</div>
              <div className="text-red-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">₹50Cr+</div>
              <div className="text-red-100">Student Profits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
