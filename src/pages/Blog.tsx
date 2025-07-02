
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, Search, TrendingUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Trading Strategies for Beginners in 2024",
      excerpt: "Learn the most effective trading strategies that every beginner should know to start their journey in the stock market.",
      author: "Rahul Sharma",
      date: "Dec 15, 2024",
      category: "Trading Tips",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Market Volatility: A Complete Guide",
      excerpt: "Market volatility can be scary, but understanding it is key to successful trading. Here's everything you need to know.",
      author: "Priya Patel",
      date: "Dec 12, 2024",
      category: "Market Analysis",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "5 Common Mistakes New Traders Make (And How to Avoid Them)",
      excerpt: "Avoid these costly mistakes that can derail your trading career before it even begins.",
      author: "Amit Singh",
      date: "Dec 10, 2024",
      category: "Education",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "The Psychology of Trading: Managing Emotions for Success",
      excerpt: "Your mindset can make or break your trading success. Learn how to master the psychological aspects of trading.",
      author: "Dr. Kavya Nair",
      date: "Dec 8, 2024",
      category: "Psychology",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Technical Analysis vs Fundamental Analysis: Which is Better?",
      excerpt: "Explore the pros and cons of both analysis methods and learn which approach suits your trading style.",
      author: "Vikram Reddy",
      date: "Dec 5, 2024",
      category: "Analysis",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Cryptocurrency Trading: Opportunities and Risks in 2024",
      excerpt: "Navigate the exciting world of cryptocurrency trading with our comprehensive guide to opportunities and risks.",
      author: "Neha Gupta",
      date: "Dec 3, 2024",
      category: "Cryptocurrency",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "Trading Tips", "Market Analysis", "Education", "Psychology", "Analysis", "Cryptocurrency"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trading Insights & Tips
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Stay updated with the latest market trends, trading strategies, and expert insights
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 overflow-hidden shadow-xl border-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-600">
                  Featured
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-blue-100 text-blue-800">
                  {post.category}
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Button className="w-fit bg-red-600 hover:bg-red-700">
                  Read Full Article
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0 shadow-md animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                  {post.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <Button size="sm" variant="outline" className="group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-r from-red-600 to-red-700 text-white border-0">
          <CardContent className="p-8 text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-300" />
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Market Insights
            </h2>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Get weekly market analysis, trading tips, and exclusive content delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-red-200"
              />
              <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
