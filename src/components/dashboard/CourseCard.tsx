
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Download } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  certificate: boolean;
  lastAccessed: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
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
  );
};

export default CourseCard;
