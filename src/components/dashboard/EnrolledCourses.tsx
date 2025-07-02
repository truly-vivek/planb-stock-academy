
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CourseCard from './CourseCard';

interface Course {
  id: number;
  title: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  certificate: boolean;
  lastAccessed: string;
}

interface EnrolledCoursesProps {
  courses: Course[];
}

const EnrolledCourses = ({ courses }: EnrolledCoursesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Courses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </CardContent>
    </Card>
  );
};

export default EnrolledCourses;
