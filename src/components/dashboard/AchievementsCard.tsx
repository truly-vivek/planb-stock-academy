
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

interface Achievement {
  name: string;
  earned: boolean;
}

interface AchievementsCardProps {
  achievements: Achievement[];
}

const AchievementsCard = ({ achievements }: AchievementsCardProps) => {
  return (
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
  );
};

export default AchievementsCard;
