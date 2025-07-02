
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

interface ReferralCardProps {
  referralCode: string;
  bonusAmount: string;
}

const ReferralCard = ({ referralCode, bonusAmount }: ReferralCardProps) => {
  return (
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
          <div className="font-mono font-bold text-red-600">{referralCode}</div>
        </div>
        <div className="text-sm text-gray-600">
          Share your code and earn {bonusAmount} for each successful referral!
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700">
          Share & Earn
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReferralCard;
