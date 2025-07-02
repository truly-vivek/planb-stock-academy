
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

interface ProfileCardProps {
  userName: string;
  membershipType: string;
}

const ProfileCard = ({ userName, membershipType }: ProfileCardProps) => {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-10 w-10 text-red-600" />
        </div>
        <h3 className="font-semibold text-lg mb-1">{userName}</h3>
        <p className="text-gray-600 text-sm mb-4">{membershipType}</p>
        <Button variant="outline" size="sm" className="w-full">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
