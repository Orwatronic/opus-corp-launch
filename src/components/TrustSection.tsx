import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CFO",
    company: "TechCorp Industries",
    content: "This ERP system transformed our financial operations. We've reduced closing time by 75% and gained real-time visibility into all our business processes.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Manufacturing Co.",
    content: "The manufacturing module is exceptional. Our production efficiency increased by 40% within the first quarter of implementation.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "CTO",
    company: "Innovation Labs",
    content: "Seamless integration with our existing systems and excellent API support. The technical team's support has been outstanding throughout our journey.",
    rating: 5
  }
];

const stats = [
  { value: "10,000+", label: "Enterprise Clients" },
  { value: "99.9%", label: "System Uptime" },
  { value: "40%", label: "Average Efficiency Gain" },
  { value: "24/7", label: "Expert Support" }
];

const certifications = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR Compliant",
  "HIPAA Ready",
  "PCI DSS",
  "SOX Compliant"
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-trust-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
            <span className="block text-primary">Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of enterprises who have transformed their operations with our proven ERP platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Security & Compliance Certifications
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-border text-sm font-medium text-foreground hover:bg-white transition-colors duration-300"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;