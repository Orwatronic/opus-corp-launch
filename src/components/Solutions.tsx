import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  ShoppingCart, 
  Factory, 
  Truck, 
  DollarSign, 
  Users2,
  ArrowRight,
  Shield,
  Wrench,
  Heart
} from "lucide-react";

const solutions = [
  {
    icon: DollarSign,
    title: "Financial Management (FIN)",
    description: "Complete financial control with automated accounting, budgeting, and real-time financial reporting.",
    features: ["General Ledger", "AP/AR", "Asset Accounting", "Financial Reporting"]
  },
  {
    icon: Users2,
    title: "Human Capital Management (HCM)",
    description: "Streamline HR processes and empower your workforce with comprehensive people management tools.",
    features: ["HR Management", "Payroll", "Performance Management", "Employee Self-Service"]
  },
  {
    icon: Factory,
    title: "Materials Management (MM)",
    description: "Optimize inventory and procurement processes with advanced materials management capabilities.",
    features: ["Procurement", "Inventory Control", "Warehouse Management", "Vendor Management"]
  },
  {
    icon: ShoppingCart,
    title: "Sales & Distribution (SD)",
    description: "End-to-end sales process management from order to delivery with integrated customer service.",
    features: ["Order Management", "Billing", "Customer Service", "Sales Analytics"]
  },
  {
    icon: Building2,
    title: "Production Planning (PP)",
    description: "Advanced manufacturing execution with integrated production planning and BOM management.",
    features: ["Manufacturing", "MES", "BOM Management", "Production Scheduling"]
  },
  {
    icon: Truck,
    title: "Project System (PS)",
    description: "Deliver projects on time and within budget with comprehensive project management capabilities.",
    features: ["Project Management", "Resource Allocation", "Cost Tracking", "Project Analytics"]
  },
  {
    icon: Shield,
    title: "Quality Management (QM)",
    description: "Ensure product quality and compliance with comprehensive quality control systems.",
    features: ["Quality Control", "Inspections", "Compliance", "Quality Analytics"]
  },
  {
    icon: Wrench,
    title: "Plant Maintenance (PM)",
    description: "Optimize asset performance with preventive maintenance and asset management tools.",
    features: ["Asset Management", "Maintenance Scheduling", "Work Orders", "Equipment Tracking"]
  },
  {
    icon: Heart,
    title: "Customer Relationship Management (CRM)",
    description: "Build stronger customer relationships with integrated CRM and service management.",
    features: ["Lead Management", "Customer Service", "Sales Pipeline", "Contact Management"]
  }
];

const Solutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Business Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tailored Solutions for
            <span className="block text-accent">Every Department</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From finance to manufacturing, our modular ERP system adapts to your industry needs with specialized solutions for every business function.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 mb-4">
                    <solution.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

{solution.title.includes("CRM") ? (
                  <Link to="/crm" className="w-full">
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of experts can help you design a tailored ERP solution that perfectly fits your unique business requirements.
          </p>
          <Button variant="cta" size="xl">
            Speak with an Expert
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;