
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MapPin, Calendar, User } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Have questions? We're here to help you succeed in your trading journey
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="firstName" 
                          placeholder="John"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="course">Course Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Payments</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 mt-1" />
                    <span className="text-sm text-gray-600">
                      I agree to receive updates and promotional emails from PlanB Solutions
                    </span>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700 h-12 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-semibold">Email Support</div>
                    <div className="text-gray-600 text-sm">support@planbsolutions.com</div>
                    <div className="text-gray-500 text-xs">Response within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-semibold">Office Hours</div>
                    <div className="text-gray-600 text-sm">Monday - Friday</div>
                    <div className="text-gray-600 text-sm">9:00 AM - 6:00 PM IST</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-600 text-sm">
                      123 Financial District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Need Immediate Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Chat with our support team for instant assistance
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <button className="text-left text-sm text-red-600 hover:text-red-700 font-medium">
                    How do I access my courses?
                  </button>
                  <button className="text-left text-sm text-red-600 hover:text-red-700 font-medium">
                    Can I get a refund?
                  </button>
                  <button className="text-left text-sm text-red-600 hover:text-red-700 font-medium">
                    How do referral codes work?
                  </button>
                  <button className="text-left text-sm text-red-600 hover:text-red-700 font-medium">
                    What payment methods do you accept?
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
