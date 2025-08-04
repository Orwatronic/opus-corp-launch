import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ enterprises already using our ERP platform to streamline operations, reduce costs, and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button variant="enterprise" size="xl" className="bg-white text-primary hover:bg-gray-50">
              <Calendar className="w-5 h-5" />
              Schedule Demo
            </Button>
            
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              <MessageCircle className="w-5 h-5" />
              Talk to Sales
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 text-blue-100">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-2xl font-bold text-white mb-2">30-Day</div>
              <div className="text-sm">Free Trial Period</div>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-2xl font-bold text-white mb-2">No Setup</div>
              <div className="text-sm">Fees or Hidden Costs</div>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-2xl font-bold text-white mb-2">Expert</div>
              <div className="text-sm">Implementation Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;