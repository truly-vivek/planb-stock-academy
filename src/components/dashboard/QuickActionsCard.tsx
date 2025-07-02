
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActionsCard = () => {
  return (
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
  );
};

export default QuickActionsCard;
