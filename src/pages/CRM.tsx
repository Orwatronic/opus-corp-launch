import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Users, 
  Target, 
  Building2, 
  Contact, 
  UserCheck,
  TrendingUp,
  Megaphone,
  HeadphonesIcon,
  FileText,
  Star,
  BarChart3,
  Zap,
  Globe,
  Smartphone,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";

const CRM = () => {
  const customerManagementFeatures = [
    {
      icon: Users,
      title: "360-Degree Customer View",
      description: "Complete interaction history and comprehensive customer profiles"
    },
    {
      icon: Target,
      title: "Lead & Opportunity Management",
      description: "Sales pipeline tracking with detailed opportunity management"
    },
    {
      icon: Building2,
      title: "Account Management",
      description: "Hierarchical customer structures with parent-child relationships"
    },
    {
      icon: Contact,
      title: "Contact Management",
      description: "Communication preferences and contact interaction tracking"
    },
    {
      icon: UserCheck,
      title: "Customer Segmentation",
      description: "Advanced segmentation and targeting capabilities"
    }
  ];

  const salesMarketingFeatures = [
    {
      icon: TrendingUp,
      title: "Sales Pipeline Management",
      description: "Complete pipeline management with accurate forecasting"
    },
    {
      icon: Megaphone,
      title: "Marketing Campaign Management",
      description: "Campaign creation, execution, and performance tracking"
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Service & Case Management",
      description: "Integrated customer service with case tracking and resolution"
    },
    {
      icon: FileText,
      title: "Contract & Warranty Management",
      description: "Complete contract lifecycle and warranty tracking"
    },
    {
      icon: Star,
      title: "Customer Satisfaction Tracking",
      description: "Surveys, feedback collection, and satisfaction analytics"
    }
  ];

  const advancedFeatures = [
    {
      icon: BarChart3,
      title: "Customer Analytics & Insights",
      description: "Behavioral insights and predictive customer analytics"
    },
    {
      icon: Zap,
      title: "Automated Marketing Workflows",
      description: "Intelligent automation for marketing campaigns and follow-ups"
    },
    {
      icon: Globe,
      title: "Customer Portal",
      description: "Self-service portal for customers with account management"
    },
    {
      icon: Smartphone,
      title: "Social Media Integration",
      description: "Integration with social platforms and external channels"
    },
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Next-best-action recommendations powered by machine learning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Customer Relationship Management</h1>
              <p className="text-muted-foreground">Build stronger customer relationships with integrated CRM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <Badge variant="secondary" className="mb-4">
            CRM Module
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Customer
            <span className="block text-accent">Relationship Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform customer relationships with our comprehensive CRM solution. From lead generation to customer retention, 
            manage every touchpoint with advanced analytics and AI-powered insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="lg">
              Request Demo
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Management Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Customer Management</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive customer data management with 360-degree visibility into all customer interactions and relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerManagementFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales & Marketing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Sales & Marketing</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Streamline your sales processes and marketing campaigns with integrated tools for pipeline management and customer engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesMarketingFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Advanced Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge technology with AI-powered insights, automation, and advanced analytics to stay ahead of the competition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Customer Relationships?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get started with Feebee Technologies CRM and experience the power of integrated customer relationship management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRM;