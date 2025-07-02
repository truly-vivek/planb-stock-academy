
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trophy, Clock, Download, User, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Stock Market Fundamentals",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      certificate: false,
      lastAccessed: "2 hours ago"
    },
    {
      id: 2,
      title: "Technical Analysis Mastery", 
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      certificate: false,
      lastAccessed: "1 day ago"
    },
    {
      id: 3,
      title: "Risk Management & Psychology",
      progress: 100,
      totalLessons: 20,
      completedLessons: 20,
      certificate: true,
      lastAccessed: "3 days ago"
    }
  ];

  const achievements = [
    { name: "First Course Complete", earned: true },
    { name: "Technical Analyst", earned: true },
    { name: "Risk Master", earned: true },
    { name: "Portfolio Pro", earned: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-red-100">Continue your trading education journey</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-300">₹45,000</div>
              <div className="text-red-100 text-sm">Portfolio Value</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-gray-600">Courses Enrolled</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-gray-600">Certificates Earned</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">42h</div>
                  <div className="text-gray-600">Total Learning Time</div>
                </CardContent>
              </Card>
            </div>

            {/* Enrolled Courses */}
            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{course.title}</h3>
                      {course.certificate && (
                        <Badge className="bg-green-100 text-green-800">
                          <Trophy className="h-3 w-3 mr-1" />
                          Certified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{course.completedLessons} of {course.totalLessons} lessons completed</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Materials
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          Continue Learning
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg mb-1">John Doe</h3>
                <p className="text-gray-600 text-sm mb-4">Premium Member</p>
                <Button variant="outline" size="sm" className="w-full">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Referral Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Referral Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Your Referral Code:</div>
                  <div className="font-mono font-bold text-red-600">JOHN2024</div>
                </div>
                <div className="text-sm text-gray-600">
                  Share your code and earn ₹500 for each successful referral!
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Share & Earn
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Trophy className={`h-5 w-5 ${achievement.earned ? 'text-yellow-500' : 'text-gray-300'}`} />
                    <span className={`text-sm ${achievement.earned ? 'text-gray-900' : 'text-gray-400'}`}>
                      {achievement.name}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/courses">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse More Courses
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
