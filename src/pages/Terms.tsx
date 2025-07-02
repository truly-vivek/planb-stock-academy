
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Terms and conditions for using PlanB Solutions
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="shadow-lg border-0">
          <CardContent className="p-8 prose prose-gray max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> December 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using PlanB Solutions' website and services, you accept and agree to be 
                bound by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily access and use our courses and materials for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Account</h2>
              <p className="text-gray-600 mb-4">
                When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Safeguarding your password and all activities under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains accurate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Course fees are clearly displayed before purchase. By enrolling in a course, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Pay all applicable fees and taxes</li>
                <li>Provide accurate payment information</li>
                <li>Accept responsibility for all charges incurred</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Policy</h2>
              <p className="text-gray-600">
                We offer a 7-day money-back guarantee for all courses. Refund requests must be made within 
                7 days of purchase and before completing 30% of the course content. Refunds will be processed 
                within 5-10 business days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
              <p className="text-gray-600 mb-4">
                You may not use our services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>For any unlawful purpose or to solicit unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations or laws</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer</h2>
              <p className="text-gray-600">
                The information on this website is provided on an 'as is' basis. To the fullest extent 
                permitted by law, PlanB Solutions excludes all representations, warranties, conditions and 
                terms whether express, implied, statutory or otherwise. Trading and investing involves risk, 
                and past performance does not guarantee future results.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitations</h2>
              <p className="text-gray-600">
                In no event shall PlanB Solutions or its suppliers be liable for any damages (including, 
                but not limited to, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-600">
                These terms and conditions are governed by and construed in accordance with the laws of 
                India and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-600">
                  <strong>PlanB Solutions</strong><br />
                  Email: legal@planbsolutions.com<br />
                  Address: 123 Financial District, Mumbai, Maharashtra 400001, India
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
