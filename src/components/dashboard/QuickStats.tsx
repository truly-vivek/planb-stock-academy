
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Trophy, Clock } from 'lucide-react';

interface QuickStatsProps {
  coursesEnrolled: number;
  certificatesEarned: number;
  totalLearningTime: string;
}

const QuickStats = ({ coursesEnrolled, certificatesEarned, totalLearningTime }: QuickStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardContent className="p-6 text-center">
          <BookOpen className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{coursesEnrolled}</div>
          <div className="text-gray-600">Courses Enrolled</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 text-center">
          <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{certificatesEarned}</div>
          <div className="text-gray-600">Certificates Earned</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 text-center">
          <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{totalLearningTime}</div>
          <div className="text-gray-600">Total Learning Time</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickStats;
