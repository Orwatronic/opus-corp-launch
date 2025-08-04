import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Lock,
  TrendingUp,
  Database,
  Cloud
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and customizable dashboards to drive data-driven decisions across all business units."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with end-to-end encryption, multi-factor authentication, and role-based access control."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second response times and 99.9% uptime guaranteed SLA."
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description: "Multi-currency, multi-language support with compliance for 100+ countries and regions."
  },
  {
    icon: Users,
    title: "Collaborative Workflows",
    description: "Streamlined approval processes and automated workflows to enhance team productivity."
  },
  {
    icon: Database,
    title: "Unified Data Management",
    description: "Centralized data repository with seamless integrations to existing systems and third-party applications."
  },
  {
    icon: TrendingUp,
    title: "Predictive Intelligence",
    description: "AI-powered forecasting and machine learning algorithms to anticipate business trends."
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built for the cloud with automatic scaling, disaster recovery, and global CDN distribution."
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "Pre-built compliance frameworks for GDPR, HIPAA, SOX, and industry-specific regulations."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-feature-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Enterprise Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="block text-primary">Scale Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive ERP platform provides all the tools and capabilities your enterprise needs to operate efficiently and grow sustainably.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;