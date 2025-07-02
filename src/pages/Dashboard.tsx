
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import QuickStats from '@/components/dashboard/QuickStats';
import EnrolledCourses from '@/components/dashboard/EnrolledCourses';
import ProfileCard from '@/components/dashboard/ProfileCard';
import ReferralCard from '@/components/dashboard/ReferralCard';
import AchievementsCard from '@/components/dashboard/AchievementsCard';
import QuickActionsCard from '@/components/dashboard/QuickActionsCard';

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
      
      <DashboardHeader 
        userName="John" 
        portfolioValue="₹45,000" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <QuickStats 
              coursesEnrolled={3}
              certificatesEarned={1}
              totalLearningTime="42h"
            />
            
            <EnrolledCourses courses={enrolledCourses} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ProfileCard 
              userName="John Doe" 
              membershipType="Premium Member" 
            />
            
            <ReferralCard 
              referralCode="JOHN2024"
              bonusAmount="₹500"
            />
            
            <AchievementsCard achievements={achievements} />
            
            <QuickActionsCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
